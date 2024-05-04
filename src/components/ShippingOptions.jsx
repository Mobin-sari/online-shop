import { delivery } from "../constants/list";

import styles from "../styles//Shipping.module.css";

import { FaShippingFast } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";

export default function ShippingOptions() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.shipping}>
          <h1>
            <span>
              <FaShippingFast color="#0a369d" />
            </span>
            -Shipping Options for Our Online Shop
          </h1>
          <p>
            At Online Shop, we strive to provide convenient and efficient
            shipping options to our valued customers across Europe. We
            understand the importance of timely delivery and offer a variety of
            shipping methods to suit your needs.
          </p>
        </div>
        <div className={styles.delivery}>
          {delivery.map((d) => (
            <div key={d.id}>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.order}>
          <h2>
            <span>
              <MdOutlineBorderColor color="#0a369d" />
            </span>
            -How to Place Your Order
          </h2>
          <p>
            Placing an order with [Your Online Shop] is simple and hassle-free.
            Just browse through our website, add your desired items to the cart,
            and proceed to checkout. During the checkout process, you'll have
            the option to select your preferred shipping method.
          </p>
        </div>
      </div>
    </>
  );
}
