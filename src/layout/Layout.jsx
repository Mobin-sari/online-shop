import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
