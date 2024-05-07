import axios from "axios";

const choseData = (type, data, updateData) => {
  if (type === "All") {
    const allData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      return data;
    };
    return allData;
  }
  // limit product
  if (type === "limit") {
    const getData = async (data) => {
      const page = await axios.get(
        `https://fakestoreapi.com/products?limit=${data}`
      );
      return page;
    };
    return getData(data);
  }
  // category product
  else if (type === "category") {
    const getCategory = async (data) => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${data}`
      );
      return response;
    };
    return getCategory(data);
  }
  // delete products:
  else if (type === "delete") {
    const deleteProduct = async (data) => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${data}`,
        {
          method: "DELETE",
        }
      );
      return response;
    };
    return deleteProduct(data);
  }
  // update products
  else if (type === "update") {
    const updateProduct = async ({ data, updateData }) => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${data}`,
        {
          method: "PUT",
          body: JSON.stringify(updateData),
        }
      );
      return response;
    };
    return updateProduct({ data, updateData });
  }
  // get users
  else {
    const getUsers = async () => {
      const responseUsers = await axios.get(`https://fakestoreapi.com/users`);
      return responseUsers;
    };
    return getUsers();
  }
};

export { choseData };
