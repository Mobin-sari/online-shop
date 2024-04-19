import { configureStore } from "@reduxjs/toolkit";

import productsRudecer from "../features/api/apiSlice";
import usersReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: { products: productsRudecer, users: usersReducer },
});

export default store;
