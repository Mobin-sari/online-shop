import { useParams } from "react-router-dom";

import styles from "../styles/Detail.module.css";

import { delivery } from "../constants/list";

export default function DetailCard({ productList }) {
  const { id } = useParams();
  const products = productList;
  const productDetail = useProductsDetails(products, id);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.detailCard}>
          <img src={productDetail?.image} alt={productDetail?.title} />
          <div>
            <h1 className={styles.title}>{productDetail?.title}</h1>
            <p className={styles.desc}>{productDetail?.description}</p>
            <p className={styles.price}>${productDetail?.price}</p>
            <div className={styles.delivery}>
              {delivery.map((d) => (
                <p key={d.id}>
                  {d.id}- {d.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const useProductsDetails = (product, id) => {
  const result = product?.find((product) => product.id == id);
  return result;
};
