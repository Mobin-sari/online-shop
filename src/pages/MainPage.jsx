import Cards from "./Cards";
import Sidebar from "../components/Sidebar";

import styles from "../styles/MainPage.module.css";

function MainPage({ limit, setLimit }) {
  return (
    <>
      <img src="/bag.jpg" alt="bag" className={styles.image} />
      <div className={styles.container}>
      <Sidebar limit={limit} />
        <Cards limit={limit} setLimit={setLimit} />
      </div>
    </>
  );
}

export default MainPage;
