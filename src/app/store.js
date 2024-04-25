import { configureStore } from "@reduxjs/toolkit";

import productsRudecer from "../features/api/apiSlice";
import usersReducer from "../features/users/usersSlice";
import cartReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    products: productsRudecer,
    users: usersReducer,
    cart: cartReducer,
  },
});

export default store;
