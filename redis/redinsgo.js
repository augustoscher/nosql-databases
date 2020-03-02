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
  client.FLUSHDB();
  users.forEach(user => {
    client.hmset(user.key, "name", user.name, "bcartela", user.cartelaKey, "bscore", user.scoreKey);
    client.sadd(user.cartelaKey, user.cartela);
    client.set(user.scoreKey, 0);
  });
  client.sadd(STONES_KEY, util.getStones());
};

const getScore = async key => {
  const score = await getAsync(key);
  return score;
}

const getWinner = async (turns, users) => {
  if (turns >= 15 ) {
    for(let i = 0; i < users.length; i++) {
      const score = await getScore(users[i].scoreKey);
      if (score >= 15) {
        return users[i];
      }
    }
  }
  return null;
};

const applyHitters = async (users, stone) => {
  let hitters = '';
  for(let i = 0; i < users.length; i++) {
    const cartela = await smembersAsync(users[i].cartelaKey);
    if (cartela.includes(stone)) {
      client.incr(users[i].scoreKey);
      const score = await getScore(users[i].scoreKey);
      if (hitters.length > 0) {
        hitters = hitters.concat(`, ${users[i].name} - ${score}pts`)
      } else {
        hitters = hitters.concat(`${users[i].name} - ${score}pts`);
      }
    }
  }
  return hitters;
}

const isAvaiableStones = async () => {
  const stones = await smembersAsync(STONES_KEY);
  return stones.length > 0;
}

const main = async () => {
  const users = util.getUsers();
  setUp(users);

  let turns = 0;
  do {
    turns += 1;
    const stone = await spopAsync(STONES_KEY);
    const hitters = await applyHitters(users, stone);

    console.log(`${turns}ª jogada...`)
    console.log(`Sorteada pedra nº.: ${stone}`);
    console.log(`Acertadores: ${hitters}`);

    console.log();
    winner = await getWinner(turns, users);
  } while(winner === null && await isAvaiableStones())


  if (winner) {
    console.log();
    const redisWinner = await hgetallAsync(winner.key);
    const score = await getScore(winner.scoreKey)
    console.log(`O vencedor é: ${redisWinner.name} com ${score} pontos!`)
  } else {
    console.log('Todas pedras foram sorteadas, ninguém ganhou...');
  }

  client.quit();
};

main();
