import React from "react";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { categories } from "../constants/list";

import { fetchProducts } from "../features/api/apiSlice";

import styles from "../styles/Sidebar.module.css";

export default function Sidebar({ limit }) {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
console.log(limit);
  const categoryHandler = (event) => {
    console.log(event.target.innerText);
    const selectedProduct = event.target.innerText.toLowerCase();
    setCategory(selectedProduct);
  };

  useEffect(() => {
    dispatch(fetchProducts({ type: "category", p: category }));
    if (category === "all") {
      dispatch(fetchProducts({ type: "limit", p:limit }));
    }
  }, [category, limit]);

  return (
    <>
      <div className={styles.sidebar}>
        <div>
          <ul onClick={categoryHandler}>
            {categories.map((e) => (
              <React.Fragment key={e.id}>
                <li key={e.id}>
                  {e.type}
                  <p>
                    <img className={styles.svg} src={`/${e.type}.svg`} />
                  </p>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
