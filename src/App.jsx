import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import PanelAdmin from "./pages/PanelAdmin";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import DetailCard from "./components/DetailCard";
import { fetchProducts } from "./features/api/apiSlice";

function App() {
  const [deleteProduct, setDeleteProduct] = useState(0);
  const [limit, setLimit] = useState(10);

  const usersList = useSelector((state) => state.users);
  const productList = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ type: "limit", p: 20 }));
    dispatch(fetchUsers());
  }, [limit]);

  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/shop" replace />} />
          <Route
            path="paneladmin/*"
            element={
              <PanelAdmin
                users={usersList}
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
              />
            }
          />
          <Route
            path="/shop"
            element={<MainPage limit={limit} setLimit={setLimit} />}
          />
          <Route
            path="/shop/:id"
            element={<DetailCard productList={productList} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
