import styles from "../styles/Card.module.css";

import { Link } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { shorterName } from "../helper/helper";

export default function Card({ product }) {
  return (
    <>
      {product.products?.map((p) => (
        <div className={styles.container} key={p.id}>
          <div>
            <img className={styles.image} src={p.image} alt={p.title} />
            <div>
              <div>
                <p >{shorterName(p.title)}</p>
                <CiHeart />
              </div>
            </div>
            <div>
              <span>${p.price}</span>
            </div>
            <div>
              <Link to={`/shop/${p.id}`}>
                <CgDetailsMore />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
