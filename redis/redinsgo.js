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

  // const users = getUsers();
  // client.hmset(USERS_KEY, users);

  client.hmset('users', 'portugues', 'ingles', 'espanhol', 'alemao');
  client.hgetall(USERS_KEY, function (err, object) {
    console.log(object);
  });

  console.log();
  client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
    console.log(reply);
  });

  client.smembers('tags', function (err, reply) {
    console.log(reply);
  });

}

main();