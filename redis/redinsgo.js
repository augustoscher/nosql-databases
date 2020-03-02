const redis = require("redis");
const { promisify } = require("util");
const util = require('./util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const spopAsync = promisify(client.spop).bind(client);
const smembersAsync = promisify(client.smembers).bind(client);
const hgetallAsync = promisify(client.hgetall).bind(client);

const STONES_KEY = 'stones';

const setUp = users => {
  users.forEach(user => {
    client.hmset(user.key, "name", user.name, "bcartela", user.cartelaKey, "bscore", user.scoreKey);
    client.sadd(user.cartelaKey, user.cartela);
    client.set(user.scoreKey, 0);
  });
  client.sadd(STONES_KEY, util.getStones());
};

const getWinner = async (turns, users) => {
  if (turns >= 15 ) {
    for(let i = 0; i < users.length; i++) {
      const score = await getAsync(users[i].scoreKey);
      if (score >= 15) {
        return users[i];
      }
    }
  }
  return null;
};

const isAvaiableStones = async () => {
  const stones = await smembersAsync(STONES_KEY);
  return stones.length > 0;
}

const main = async () => {
  console.log("Hello Redinsgo...");

  const users = util.getUsers();
  setUp(users);

  let turns = 0;
  do {
    turns += 1;
    const stone = await spopAsync(STONES_KEY);

    console.log(`${turns}ª jogada...`)
    console.log(`Sorteada pedra nº.: ${stone}`);

    if (turns >= 16) {
      for (let i = 0; i < 15; i++) {
        client.incr("score:10");
      }
    }

    console.log();
    winner = await getWinner(turns, users);
  } while(winner === null && await isAvaiableStones())


  if (winner) {
    console.log();
    const redisWinner = await hgetallAsync(winner.key);
    const score = await getAsync(winner.scoreKey)
    console.log(`O vencedor é: ${redisWinner.name} com ${score} pontos!`)
  } else {
    console.log('Todas pedras foram sorteadas, ninguém ganhou...');
  }

  client.quit();
};

main();
