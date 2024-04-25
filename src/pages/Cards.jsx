import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/api/apiSlice";

import { useEffect } from "react";

import styles from "../styles/Cards.module.css";

import Loader from "../components/Loader";
import Card from "../components/Card";
import Limit from "../components/Limit";

export default function Cards({ limit, setLimit }) {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ type: "limit", p: limit }));
  }, [limit]);

  return (
    <>
      <div className={styles.loader}>{data.isLoading && <Loader />}</div>
      <div className={styles.cards}>
        <Card product={data} />
      </div>
      <Limit limit={limit} setLimit={setLimit} />
    </>
  );
}
