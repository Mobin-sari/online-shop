import DeleteProduct from "../components/DeleteProduct";
import UpdateHandler from "../components/UpdateHandler";

import styles from "../styles/OptionPanel.module.css";

export default function OptionPanel({
  deleteProduct,
  setDeleteProduct,
  isCart,
}) {
  return (
    <div className={isCart && styles.blur}>
      <h1 className={styles.title}>Panel Admin</h1>
      <div className={styles.container}>
        <UpdateHandler />
        <DeleteProduct
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
        />
      </div>
    </div>
  );
}
