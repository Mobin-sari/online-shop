import { useDispatch, useSelector } from "react-redux";
import { categories } from "../constants/list";
import { fetchProducts } from "../features/api/apiSlice";
import { useEffect } from "react";

export default function Sidebar() {
  const data = useSelector((state: object) => state.products);
  const dispatch = useDispatch();
  console.log(data);
  const categoryHandler = (event) => {
    const selectedCategory = event.target.innerText.toLowerCase();
    dispatch(fetchProducts("category", selectedCategory));
    return selectedCategory;
  };

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
