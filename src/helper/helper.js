const compareUser = (users, userName, password) => {
  const validName = users?.some(
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
  const newName = name?.split(" ").slice(0, 2).join(" ");
  return newName;
};

const shorterDes = (des) => {
  const newDes = des?.split(" ").slice(0, 5).join(" ");
  return newDes;
};

const productQuantity = (state, id) => {
  const index = state?.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  compareUser,
  sumPrice,
  sumQuntity,
  shorterName,
  shorterDes,
  productQuantity,
};
