import { useState } from "react";
import Login from "../components/Login";
import { IUsers } from "../types/typeData";

type RequestStatus = {
  isLoading: boolean;
  error: string;
};

type PropsPanelAdmin = RequestStatus & {
  users: IUsers[];
};

export default function PanelAdmin({ users }: PropsPanelAdmin): JSX.Element {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usersList = users.users;

  return (
    <>
      <Login users={usersList} userName={userName} setUserName={set}/>
    </>
  );
}
