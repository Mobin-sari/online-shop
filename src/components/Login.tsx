import { useForm, SubmitHandler } from "react-hook-form";

interface InputData {
  userName: string;
  password: string;
}

export default function Login({ users }) {
  const { handleSubmit } = useForm<InputData>();
  const onSubmit: SubmitHandler<InputData> = (data) => console.log(data);
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">username:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="text" />
        </div>
      </form>
    </>
  );
}
