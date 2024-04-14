import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
