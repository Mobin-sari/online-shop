import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/api/apiSlice";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Limit from "../components/Limit";

export default function Cards() {
  const [limit, setLimit] = useState(10);
  const data = useSelector((state: object) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(limit));
  }, [limit]);
  return (
    <>
      {data.isLoading && <h1>loading ...</h1>}
      <Card product={data} />
      <Limit limit={limit} setLimit={setLimit} />
    </>
  );
}
