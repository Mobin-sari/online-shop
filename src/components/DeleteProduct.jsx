import { useEffect } from "react";

import { fetchProducts } from "../features/api/apiSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "../styles/DeleteProduct.module.css";

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
    <div className={styles.delete}>
      <h1>DELETE PANEL</h1>
      <div>
        <label htmlFor="id">Write ID of products</label>
        <input
          type="number"
          id="id"
          placeholder="id item"
          value={deleteProduct}
          onChange={(e) => setDeleteProduct(e.target.value)}
        />
      </div>
      <div className={styles.boxButton}>
        <button onClick={deleteHandler}>Delete item</button>
      </div>
      <ToastContainer />
    </div>
  );
}
