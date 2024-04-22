import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/api/apiSlice";

import { useEffect } from "react";

import Card from "../components/Card";
import Limit from "../components/Limit";

export default function Cards({ limit, setLimit }) {
  const data = useSelector((state: object) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ type: "limit", p: limit }));
  }, [limit]);

  return (
    <>
      {data.isLoading && <h1>loading ...</h1>}
      <Card product={data} />
      <Limit limit={limit} setLimit={setLimit} />
    </>
  );
}
