import { IUsers } from "../types/typeData";

const compareUser = (users: IUsers, userName: string, password: string) => {
  const validName = users.some(
    (user) => user.username === userName && user.password === password
  );
  return validName;
};



export { compareUser };
