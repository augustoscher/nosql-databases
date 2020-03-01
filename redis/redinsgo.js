const redis = require("redis");

const randomArray = (length, max) => {
  const nums = new Set();
  while(nums.size < length) {
    nums.add(Math.floor(Math.random() * max) + 1);
  }
  return [...nums];
}

const getUsers = () => {
  let users = [];
  for (let i = 0; i < 50; i++) {
    let id = i+1;
    const cartela = randomArray(15, 99);

    const user = {
      key: `user:${id}`,
      name: `user${id}`,
      cartelaKey: `cartela:${id}`,
      cartela,
      scoreKey: `score:${id}`,
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
    client.hmset(user.key, 'name', user.name, 'bcartela', user.cartelaKey, 'bscore', user.scoreKey);
    client.sadd(user.cartelaKey, user.cartela)
  });

  // client.hgetall('user:01', function (err, object) {
  //   console.log(object);
  // });

  // console.log();
  // client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
  //   console.log(reply);
  // });

  // client.smembers('tags', function (err, reply) {
  //   console.log(reply);
  // });
}

main();