const redis = require("redis");
const USERS_KEY = 'users';

const getUsers = () => {
  let users = [];
  for (let i = 0; i < 50; i++) {
    users.push(`user:0${i+1}`);
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

  // const userTest = ['user:01', {name: 'user01', bcartela: 'cartela:01'}]
  client.hmset('user:01', 'name', 'user01', 'bcartela', 'cartela:01', 'bscore', 'score:01' );
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