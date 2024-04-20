import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import PanelAdmin from "./pages/PanelAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";

function App() {
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/paneladmin"
            element={<PanelAdmin users={usersList} />}
          />
          <Route index element={<MainPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
