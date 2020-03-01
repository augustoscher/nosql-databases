const redis = require("redis");
const USERS_KEY = 'users';

const getUsers = () => {
  let users = [];
  for (let i = 0; i < 50; i++) {
    let id = i+1;
    const user = {
      key: `user:0${id}`,
      name: `user0${id}`,
      cartela: `cartela:0${id}`,
      score: `score:0${id}`,
    }
    users.push(user);
  }
  return users;
}

const main = () => {
  console.log("Hello Redinsgo...")
  const client = redis.createClient();

  client.on("error", error => {
    console.error(error);
  });

  client.on('connect', () => {
    console.log('connected');
  });

  const users = getUsers();
  users.forEach(user => {
    client.hmset(user.key, 'name', user.name, 'bcartela', user.cartela, 'bscore', user.score);
  });

  client.hgetall('user:01', function (err, object) {
    console.log(object);
  });

  // console.log();
  // client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
  //   console.log(reply);
  // });

  // client.smembers('tags', function (err, reply) {
  //   console.log(reply);
  // });
}

main();