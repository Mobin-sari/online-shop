import { Link } from "react-router-dom";
import Cards from "./Cards";
import Sidebar from "../components/Sidebar";

function MainPage({ users }) {
  return (
    <>
      <Sidebar />
      <h1 className="text-2xl">main page</h1>
      <Cards />
      <Link to="/paneladmin">panel Admin</Link>
    </>
  );
}

export default MainPage;
