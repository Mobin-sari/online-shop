import { configureStore } from "@reduxjs/toolkit";

import productsRudecer from "../features/api/apiSlice";

const store = configureStore({
  reducer: { products: productsRudecer },
});

export default store;
