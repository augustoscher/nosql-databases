const randomArray = (length, max) => {
  const nums = new Set();
  while (nums.size < length) {
    nums.add(Math.floor(Math.random() * max) + 1);
  }
  return [...nums];
};

const getUsers = () => {
  let users = [];
  for (let i = 0; i < 50; i++) {
    let id = i + 1;
    const cartela = randomArray(15, 99);

    const user = {
      key: `user:${id}`,
      name: `user${id}`,
      cartelaKey: `cartela:${id}`,
      cartela,
      scoreKey: `score:${id}`
    };
    users.push(user);
  }
  return users;
};

module.exports = { getUsers, randomArray}
