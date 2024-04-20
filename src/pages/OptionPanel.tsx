import DeleteProduct from "../components/DeleteProduct";
import UpdateHandler from "../components/UpdateHandler";

export default function OptionPanel({ deleteProduct, setDeleteProduct }) {
  return (
    <>
      <UpdateHandler />
      <DeleteProduct
        deleteProduct={deleteProduct}
        setDeleteProduct={setDeleteProduct}
      />
    </>
  );
}
