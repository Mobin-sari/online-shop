import { FaShoppingCart } from "react-icons/fa";

import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src="/All.svg" alt="logo" />
        <div>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li>About us</li>
            <li>Comments</li>
            <li><Link to="/paneladmin">Panel admin</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <span>
          <FaShoppingCart fontSize="1.2rem"/>
        </span>
        <div>
          <p>MOBiN</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
