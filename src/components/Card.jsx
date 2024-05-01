import { Link } from "react-router-dom";

import { productQuantity, shorterDes, shorterName } from "../helper/helper";

import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../features/counter/counterSlice";

import { BiSolidDownArrowCircle } from "react-icons/bi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

import styles from "../styles/Card.module.css";

import { useDispatch, useSelector } from "react-redux";

export default function Card({ product }) {
  const { id, image, title, description, price } = product;

  const counter = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = productQuantity(counter, id);
  console.log(counter);
  return (
    <>
      <div className={styles.container} key={id}>
        <div>
          <img className={styles.image} src={image} alt={title} />
          <div>
            <div>
              <p>{shorterName(title)}</p>
              <span>
                <FaHeart color="#000" fontSize="1rem" cursor="pointer" />
              </span>
            </div>
          </div>
          <div className={styles.boxDes}>
            <p>{shorterDes(description)}</p>
          </div>
          <div className={styles.boxPrice}>
            <div>
              <span>${price}</span>
            </div>
            <p>
              {quantity == 1 && (
                <button onClick={() => dispatch(removeItem(product))}>
                  <FaTrash color="#0a369d" fontSize="1.2rem" cursor="pointer" />
                </button>
              )}
              {quantity > 1 && (
                <button onClick={() => dispatch(decrease(product))}>
                  <BiSolidDownArrowCircle
                    color="#0a369d"
                    fontSize="1.5rem"
                    cursor="pointer"
                  />
                </button>
              )}
              {!!quantity && <span>{quantity}</span>}
              {quantity == 0 ? (
                <button onClick={() => dispatch(addItem(product))}>
                  <FaSquarePlus
                    color="#0a369d"
                    fontSize="1.5rem"
                    cursor="pointer"
                  />
                </button>
              ) : (
                <button onClick={() => dispatch(increase(product))}>
                  <BiSolidUpArrowCircle
                    color="#0a369d"
                    fontSize="1.5rem"
                    cursor="pointer"
                  />
                </button>
              )}
            </p>
          </div>
          <div className={styles.detail}>
            <p>
              <Link to={`/shop/${id}`}>
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
    </>
  );
}
