import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { fetchProducts } from "../features/api/apiSlice";

interface IInputUpdate {
  id: number;
  title: string;
  price: number;
  description: string;
}

export default function UpdateHandler() {
  const { register, control, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      id: 1,
      title: "",
      price: 0,
      description: "",
    },
  });

  const onSubmit: SubmitHandler<IInputUpdate> = (data) => {
    console.log(data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ type: "update", p: "", updataData: {} }));
  }, []);

  return (
    <>
      <h1>update handler</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="number" {...register("id", { min: 1, max: 20 })} />
          {errors.id && (<p>id between 1 - 20</p>)}
        </form>
      </div>
    </>
  );
}
