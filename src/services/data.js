import axios from "axios";

const choseData = (type, data, updateData) => {
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
      )
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
      const response = await axios.get(`https://fakestoreapi.com/users`);
      return response;
    };
    return getUsers();
  }
};

export { choseData };
