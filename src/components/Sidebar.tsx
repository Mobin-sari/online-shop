import { useDispatch } from "react-redux";
import { categories } from "../constants/list";
import { fetchProducts } from "../features/api/apiSlice";
import { useEffect, useState } from "react";

export default function Sidebar({ limit }) {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  const categoryHandler = (event) => {
    if (event.target.innerText.toLowerCase() === "all") {
      return
    }
    console.log(event.target.innerText.toLowerCase())
    const selectedProduct = event.target.innerText.toLowerCase();
    setCategory(selectedProduct);
  };

  useEffect(() => {
    dispatch(fetchProducts({ type: "category", p: category }));
    if (category === "all") {
      dispatch(fetchProducts({ type: "limit", p: limit }));
    }
  }, [category]);

  return (
    <>
      <div>
        <h1>sidebar</h1>
        <ul onClick={categoryHandler}>
          {categories.map((e) => (
            <li key={e.id}>{e.type}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
