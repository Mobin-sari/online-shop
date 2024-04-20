import { useState } from "react";
import Login from "../components/Login";
import { IUsers } from "../types/typeData";

type RequestStatus = {
  isLoading: boolean;
  error: string;
};

type PropsPanelAdmin = RequestStatus & {
  users: IUsers | undefined;
};

export default function PanelAdmin({ users }: PropsPanelAdmin): JSX.Element {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usersList = users?.users;

  console.log({ userName, password });

  return (
    <>
      {login ? (
        <h1>welcome {userName}</h1>
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
