import { Idata } from "../types/typeData";

import { CiHeart } from "react-icons/ci";

import styles from "../styles/Card.module.css";

type CardProps = Idata | undefined;
export default function Card({ product }: CardProps) {
  return (
    <>
      {product.products.map((p) => (
        <div className={styles.container} key={p.id}>
          <h1>{p.id}</h1>
          <div>
            <img className={styles.image} src={p.image} alt={p.title} />
            <div>
              <p>{p.title}</p>
            </div>
            <CiHeart />
            <div>
              <p>{p.description}</p>
            </div>
            <div>
              <span>${p.price}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
