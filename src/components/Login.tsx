import { useForm, SubmitHandler } from "react-hook-form";
import { compareUser } from "../helper/helper";
import { Link } from "react-router-dom";

interface InputData {
  userName: string;
  password: string;
}

export default function Login({
  setUserName,
  setPassword,
  users,
  userName,
  password,
  setLogin,
}) {
  const { handleSubmit } = useForm<InputData>();
  const onSubmit: SubmitHandler<InputData> = () => {
    if (compareUser(users, userName, password)) {
      setLogin(true);
    } else {
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            id="userName"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button><br />
        <Link to="/">home</Link>
      </form>
    </>
  );
}
