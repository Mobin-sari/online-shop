import { useState } from "react";

import { useSelector } from "react-redux";

import Cards from "./Cards";
import Sidebar from "../components/Sidebar";
import ShippingOptions from "../components/ShippingOptions";
import Comments from "../components/Comments";

import styles from "../styles/MainPage.module.css";
import stylesFav from "../styles/Favorite.module.css";

import { shorterName } from "../helper/helper";

function MainPage({ limit, setLimit, isCart }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorite = useSelector((store) => store.cart);

  const favoriteHandler = () => {
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };

  return (
    <div className={isCart && styles.blur}>
      <img src="/bag.jpg" alt="bag" className={styles.image} />
      <div className={styles.container}>
        <Sidebar limit={limit} />
        <Cards limit={limit} setLimit={setLimit} />
        <Comments />
        <ShippingOptions />
        {/* button for showing favorites */}
        <div className={stylesFav.favorites}>
          <button onClick={favoriteHandler}>
            <img src="/favorite.svg" alt="favorite" />
          </button>
          {isFavorite && (
            <div className={stylesFav.box}>
              {favorite.favorites.map((f) => (
                <div className={stylesFav.listFavorite} key={f.id}>
                  <img src={f.image} alt={f.title} />
                  <div>
                    <p>{shorterName(f.title)}</p>
                    <span>${f.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
