import axios from "axios";

const getData = async (page) => {
  const data = await axios.get(
    `https://fakestoreapi.com/products?limit=${page}`
  );
  return data;
};

export { getData };
