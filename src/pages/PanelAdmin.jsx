import { useState } from "react";
import Login from "../components/Login";
import OptionPanel from "./OptionPanel";

export default function PanelAdmin({
  users,
  deleteProduct,
  setDeleteProduct,
  isCart
}){
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usersList = users?.users;
console.log(usersList);
  console.log({ userName, password });

  return (
    <>
      {login ? (
        <>
          <OptionPanel
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
            isCart={isCart}
          />
        </>
      ) : (
        <Login
          users={usersList}
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          setLogin={setLogin}
          isCart={isCart}
        />
      )}
    </>
  );
}
