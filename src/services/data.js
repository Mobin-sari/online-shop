import axios from "axios";

const api = "https://fakestoreapi.com/products";

const choseData = (type, page, category) => {
  if (type === "limit") {
    const getData = async (page) => {
      const data = await axios.get(`${api}?limit=${page}`);
      console.log(data);
      return data;
    };
    return getData(page);
  } else if (type === "category") {
    const getCategory = async (category) => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${category}`
      );
      return response;
    };
    return getCategory(category);
  } else {
    const getUsers = async () => {
      const response = await axios.get(`https://fakestoreapi.com/users`);
      return response;
    };
    return getUsers();
  }
};

export { choseData };
