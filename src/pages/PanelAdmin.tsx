import { useState } from "react";
import Login from "../components/Login";
import { IUsers } from "../types/typeData";
import OptionPanel from "./OptionPanel";

type RequestStatus = {
  isLoading: boolean;
  error: string;
};

type PropsPanelAdmin = RequestStatus & {
  users: IUsers | undefined;
};

export default function PanelAdmin({
  users,
  deleteProduct,
  setDeleteProduct,
}: PropsPanelAdmin): JSX.Element {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usersList = users?.users;

  console.log({ userName, password });

  return (
    <>
      {login ? (
        <>
          <OptionPanel
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
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
        />
      )}
    </>
  );
}
