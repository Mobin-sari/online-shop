import axios from "axios";

const getData = async (page) => {
  const data = await axios.get(
    `https://fakestoreapi.com/products?limit=${page}`
  );
  return data;
};

const getUsers = async () => {
  const response = await axios.get("https://fakestoreapi.com/users");
  return response;
};

export { getData, getUsers };
