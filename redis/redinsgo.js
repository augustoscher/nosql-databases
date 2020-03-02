const redis = require("redis");
const { promisify } = require("util");
const util = require('./util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

const getWinner = async users => {
  for(let i = 0; i < users.length; i++) {
    const score = await getAsync(users[i].scoreKey);
    if (score >= 15) {
      return users[i];
    }
  }
};

const main = async () => {
  console.log("Hello Redinsgo...");

  client.on("error", error => {
    console.error(error);
  });

  const users = util.getUsers();
  users.forEach(user => {
    client.hmset(user.key, "name", user.name, "bcartela", user.cartelaKey, "bscore", user.scoreKey);
    client.sadd(user.cartelaKey, user.cartela);
    client.set(user.scoreKey, 0);
  });

  //set stones
  
  //test score
  for (let i = 0; i < 15; i++) {
    client.incr("score:10");
  }

  const winner = await getWinner(users);


  console.log(winner);


  // console.log();
  // client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
  //   console.log(reply);
  // });

  //Exit when some user wins the bingo
  client.quit();
};

main();
