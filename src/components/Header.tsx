import { FaShoppingCart } from "react-icons/fa";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div>
        <img src="" alt="logo" />
      </div>
      <div>
        <ul>
          <li>shop</li>
          <li>about us</li>
          <li>comments</li>
        </ul>
        <div>
          <p>contact</p>
        </div>
      </div>
      <div>
        <div>
          <FaShoppingCart />
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <p>Mobin Sari</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
