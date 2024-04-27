import styles from "../styles/Card.module.css";

import { Link } from "react-router-dom";

import { shorterDes, shorterName } from "../helper/helper";

import { FaHeart } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

export default function Card({ product }) {
  console.log(product);
  return (
    <>
      {product?.products?.map((p) => (
        <div className={styles.container} key={p.id}>
          <div>
            <img className={styles.image} src={p.image} alt={p.title} />
            <div>
              <div>
                <p>{shorterName(p.title)}</p>
                <span>
                  <FaHeart color="#000" fontSize="1rem" cursor="pointer" />
                </span>
              </div>
            </div>
            <div className={styles.boxDes}>
              <p>{shorterDes(p.description)}</p>
            </div>
            <div className={styles.boxPrice}>
              <span>${p.price}</span>
              <p>
                <FaSquarePlus
                  color="#0a369d"
                  fontSize="1.5rem"
                  cursor="pointer"
                />
              </p>
            </div>
            <div className={styles.detail}>
              <p>
                <Link to={`/shop/${p.id}`}>
                  <CgDetailsMore
                    color="#0a369d"
                    fontSize="1.5rem"
                    cursor="pointer"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
