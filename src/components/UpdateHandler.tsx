import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { fetchProducts } from "../features/api/apiSlice";

interface IInputUpdate {
  id: number;
  title: string;
  price: number;
  description: string;
}

export default function UpdateHandler() {
  const [id, setID] = useState(0);
  const [updateData, setUpdateData] = useState<IInputUpdate>({
    id: 0,
    title: "",
    price: 0,
    description: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputUpdate>({
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
    dispatch(fetchProducts({ type: "update", p: id, updataData: updateData }));
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setID(Number(event.target.value))}
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUpdateData(prevData => ({ ...prevData, title: event.target.value }))}
            />
            {errors.title && <p>title has been 1 - 20 words</p>}
          </div>
          <div>
            <label>price</label>
            <input
              type="number"
              value={updateData.price}
              {...register("price", { min: 1, max: 2000 })}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUpdateData(prevData => ({ ...prevData, price: Number(event.target.value) }))}
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUpdateData(prevData => ({ ...prevData, description: event.target.value }))}
            />
            {errors.description && <p>description has been 5 - 40 words</p>}
          </div>
          <button type="submit" onClick={updateHandler}>update</button>
        </form>
      </div>
    </>
  );
}
