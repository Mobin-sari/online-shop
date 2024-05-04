import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import PanelAdmin from "./pages/PanelAdmin";
import DetailCard from "./components/DetailCard";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import { fetchProducts } from "./features/api/apiSlice";

function App() {
  const [deleteProduct, setDeleteProduct] = useState();
  const [isCart, setIsCart] = useState(false);
  const [limit, setLimit] = useState(10);

  const usersList = useSelector((state) => state.users);

  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ type: "limit", p: 20 }));
    dispatch(fetchUsers());
  }, [limit]);

  return (
    <>
      <Layout setIsCart={setIsCart}>
        <Routes>
          <Route index element={<Navigate to="/shop" replace />} />
          <Route
            path="paneladmin/*"
            element={
              <PanelAdmin
                users={usersList}
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                isCart={isCart}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <MainPage
                limit={limit}
                setLimit={setLimit}
                isLoading={isLoading}
                isCart={isCart}
              />
            }
          />
          <Route
            path="/shop/:id"
            element={<DetailCard productList={products} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
