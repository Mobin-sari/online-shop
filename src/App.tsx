import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import PanelAdmin from "./pages/PanelAdmin";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";

function App() {
  const [deleteProduct, setDeleteProduct] = useState(0);
  const [limit, setLimit] = useState(10);

  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
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
        </Routes>
      </Layout>
    </>
  );
}

export default App;
