import { Link } from "react-router-dom";

import Cards from "./Cards";
import Sidebar from "../components/Sidebar";

function MainPage({ limit, setLimit }) {
  
  return (
    <>
      <Sidebar limit={limit} />
      <h1 className="text-2xl">main page</h1>
      <Cards  limit={limit} setLimit={setLimit}/>
      <Link to="/paneladmin">panel Admin</Link>
    </>
  );
}

export default MainPage;
