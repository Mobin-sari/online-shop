import { useLayoutEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { productQuantity, shorterName } from "../helper/helper";

function Header({ setIsCart }) {
  const [basket, setBasket] = useState(false);

  const counter = useSelector((store) => store.cart);

  const handleBasket =() => {
    setBasket(true)
    setIsCart(true)
  }

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
              onClick={handleBasket}
            />
          </button>
          <span>{counter.itemCounter}</span>

          <div>
            <p>MOBiN</p>
          </div>
        </div>
      </div>
      {basket && <Basket setIsCart={setIsCart} setBasket={setBasket} />}
    </>
  );
}

import stylesBasket from "../styles/Basket.module.css";

const Basket = ({ setBasket, setIsCart }) => {
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

  const handleBasket = () => {
    setBasket(false);
    setIsCart(false)
  };

  return (
    <>
      <div className={stylesBasket.basket_in}>
        <div className={stylesBasket.headerBasket}>
          <h1>Your Cart</h1>
          <button onClick={handleBasket}>X</button>
        </div>
        <div className={stylesBasket.listProduct}>
          {selectProduct?.selectedItems.map((p) => (
            <div className={stylesBasket.product}>
              <img src={p.image} alt={p.title} />
              <div>
                <div>
                  <p className={stylesBasket.title}>{shorterName(p.title)}</p>
                  <p className={stylesBasket.price}>${p.price}</p>
                </div>
                <div className={stylesBasket.quantity}>
                  {productQuantity(selectProduct, p.id)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={stylesBasket.boxCheck}>
          <p className={stylesBasket.total}>
            TOTAL : <span>${selectProduct.total}</span>
          </p>
          <button>Continue to check out</button>
        </div>
      </div>
    </>
  );
};

export default Header;
