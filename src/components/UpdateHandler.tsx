import { useEffect, useState } from "react";

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
  const [id, setID] = useState(0)
  const [updateData, setUpdateData] = useState({
    title: "",
    price: 0,
    description: "",
  });
console.log({updateData});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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

  const updateHandler = () => {
    dispatch(
      fetchProducts({ type: "update", p: id, updataData: updateData })
    );
  };

  return (
    <>
      <h1>update handler</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>ID</label>
            <input
              value={id}
              type="number"
              {...register("id", { min: 1, max: 20 })}
              onChange={(event) => setID(event.target.value)}
            />
            {errors.id && <p>id between 1 - 20</p>}
          </div>
          <div>
            <label>title</label>
            <input
              type="text"
              value={updateData.title}
              {...register("title", {
                required: true,
                maxLength: 20,
                minLength: 5,
              })}
              onChange={(event) => setUpdateData(event.target.value)}
            />
            {errors.title && <p>title has been 1 - 20 words</p>}
          </div>
          <div>
            <label>price</label>
            <input
              type="number"
              value={updateData.price}
              {...register("price", { min: 1, max: 2000 })}
              onChange={(event) => setUpdateData(event.target.value)}
            />
            {errors.price && <p>Price invalid</p>}
          </div>
          <div>
            <label>description</label>
            <input
              type="text"
              value={updateData.description}
              {...register("description", {
                required: true,
                maxLength: 40,
                minLength: 5,
              })}
              onChange={(event) => setUpdateData(event.target.value)}
            />
            {errors.description && <p>description has been 5 - 40 words</p>}
          </div>
          <button onClick={updateHandler}>update</button>
        </form>
      </div>
    </>
  );
}


