import { useLayoutEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { productQuantity, shorterName } from "../helper/helper";

function Header() {
  const [basket, setBasket] = useState(false);

  const counter = useSelector((store) => store.cart);
  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src="/All.svg" alt="logo" />
          <div>
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>About us</li>
              <li>Comments</li>
              <li>
                <Link to="/paneladmin">Panel admin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button>
            <FaShoppingCart
              fontSize="1.5rem"
              color="#0a369d"
              onClick={() => setBasket(true)}
            />
          </button>
          <span>{counter.itemCounter}</span>

          <div>
            <p>MOBiN</p>
          </div>
        </div>
      </div>
      {basket && <Basket setBasket={setBasket} />}
    </>
  );
}

const Basket = ({ setBasket }) => {
  const selectProduct = useSelector((store) => store.cart);

  useLayoutEffect(() => {
    const disableScroll = (e) => {
      e.preventDefault();
    };
    document.body.addEventListener("wheel", disableScroll, { passive: false });
    return () => {
      document.body.removeEventListener("wheel", disableScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.basket_in}>
        <div className={styles.headerBasket}>
          <h1>Your Cart</h1>
          <button onClick={() => setBasket(false)}>X</button>
        </div>
        <div>
          {selectProduct?.selectedItems.map((p) => (
            <div className={styles.product}>
              <img src={p.image} />
              <div>
                <div>
                  <p>{shorterName(p.title)}</p>
                  <p>{p.price}</p>
                </div>
                <div>{productQuantity(selectProduct, p.id)}</div>
              </div>
              <div className={styles.border}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
