import styles from "../styles/Footer.module.css";

import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { product, company, resourses } from "../constants/list";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <img src="/All.svg" className={styles.logo} />
      </div>
      <div className={styles.list}>
        <div>
          <h3>Product</h3>
          {product.map((p) => (
            <p key={p.id}>{p.name}</p>
          ))}
        </div>
        <div>
          <h3>Resourses</h3>
          {resourses.map((r) => (
            <p key={r.id}>{r.name}</p>
          ))}
        </div>
        <div>
          <h3>Company</h3>
          {company.map((c) => (
            <p key={c.id}>{c.name}</p>
          ))}
        </div>
      </div>
      <div className={styles.media}>
        <FaTelegram fontSize="1.4rem" cursor="pointer" color="#24A1DE" />
        <FaGithub fontSize="1.4rem" cursor="pointer" />
        <FaLinkedin fontSize="1.4rem" cursor="pointer" color="#0a66c2" />
      </div>
    </div>
  );
}

export default Footer;
