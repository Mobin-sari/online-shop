import Cards from "./Cards";
import Sidebar from "../components/Sidebar";

import styles from "../styles/MainPage.module.css";
import Comments from "../components/Comments";

function MainPage({ limit, setLimit }) {
  return (
    <>
      <img src="/bag.jpg" alt="bag" className={styles.image} />
      <div className={styles.container}>
        <Sidebar limit={limit} />
        <Cards limit={limit} setLimit={setLimit} />
        <Comments />
      </div>
    </>
  );
}

export default MainPage;
