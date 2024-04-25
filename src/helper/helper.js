const compareUser = (users, userName, password) => {
  const validName = users.some(
    (user) => user.username === userName && user.password === password
  );
  return validName;
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

const sumQuntity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const shorterName = (name) => {
  const newName = name.split(" ").slice(0, 2);
  return newName;
};

export { compareUser, sumPrice, sumQuntity, shorterName };
