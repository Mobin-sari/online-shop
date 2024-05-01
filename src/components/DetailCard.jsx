import { useParams } from "react-router-dom";

export default function DetailCard({ productList }) {
  const { id } = useParams();

  const products = productList;

  const productDetail = useProductsDetails(products, +id);
  console.log(productDetail);
  return (
    <>
      <h1>detailcard {id}</h1>
      <h1>{productDetail?.title}</h1>
      <img src={productDetail?.image} alt={productDetail?.title} />
    </>
  );
}

const useProductsDetails = (product, id) => {
  const result = product?.find((product) => product.id == id);
  return result;
};