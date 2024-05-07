import { useForm, SubmitHandler } from "react-hook-form";


import { Link } from "react-router-dom";

import styles from "../styles/Login.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {compareUser } from "../helper/helper"

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  users: [];
  userName: string;
  password: string;
  isCart: boolean;
}

interface InputData {
  userName: string;
  password: string;
}

const Login: React.FC<Props> = ({
  setUserName,
  setPassword,
  setLogin,
  users,
  userName,
  password,
  isCart
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>({
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<InputData> = () => {
    if (compareUser(users, userName, password)) {
      setLogin(true);
    } else {
      toast.warning("Your password or username is incorrect");
    }
  };

  return (
    <div className={`${isCart && styles.blur}`}>
      <ToastContainer />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div className={styles.boxInput}>
            <label htmlFor="userName">Username</label>
            <input
              id="userName"
              type="text"
              placeholder="write your username"
              {...register("userName", {
                required: true,
                maxLength: 10,
                minLength: 3,
              })}
              onChange={(event) => setUserName(event.target.value)}
            />
            {errors.userName?.type === "maxLength" && (
              <p>The username should be 3 to 10 words</p>
            )}
            {errors.userName?.type === "minLength" && (
              <p>The username should be 3 to 10 words</p>
            )}
            {errors.userName?.type === "required" && (
              <p>The username must be filled</p>
            )}
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="write your password"
              {...register("password", {
                required: true,
                maxLength: 10,
                minLength: 5,
              })}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password?.type === "maxLength" && (
              <p>The password should be 5 to 10 words</p>
            )}
            {errors.password?.type === "minLength" && (
              <p>The password should be 5 to 10 words</p>
            )}
            {errors.password?.type === "required" && (
              <p>The password must be filled</p>
            )}
          </div>
          <div className={styles.boxButton}>
            <button type="submit">Submit</button>
            <button>
              <Link to="/">Shop</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
