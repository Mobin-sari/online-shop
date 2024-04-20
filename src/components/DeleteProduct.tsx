import { useEffect } from "react";

import { fetchProducts } from "../features/api/apiSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function DeleteProduct({ deleteProduct, setDeleteProduct }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ type: "delete", p: deleteProduct }));
  }, [deleteProduct]);

  const deleteHandler = () => {
    if (deleteProduct > 0 && deleteProduct < 21) {
      toast.success("items deleted");
    } else {
        toast.warning("ID is between 1, 20");
    }
  };

  return (
    <>
      <h1>delete product</h1>
      <div>
        <label htmlFor="id">write your id of products</label>
        <input
          type="number"
          id="id"
          value={deleteProduct}
          onChange={(e) => setDeleteProduct(e.target.value)}
        />
        <button onClick={deleteHandler}>delete item</button>
        <Link to="/">home</Link>
        <ToastContainer />
      </div>
    </>
  );
}
