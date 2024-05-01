import { useState } from "react";

import { useDispatch } from "react-redux";

import { useForm, SubmitHandler } from "react-hook-form";

import { fetchProducts } from "../features/api/apiSlice";

import styles from "../styles/UpdateProduct.module.css";

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

  const onSubmit: SubmitHandler<IInputUpdate> = () => {
    dispatch(fetchProducts({ type: "update", p: id, updataData: updateData }));
  };

  const dispatch = useDispatch();

  const updateHandler = () => {};

  return (
    <>
      <div className={styles.update}>
        <h1 className={styles.title}>UPDATE PANEL</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>ID</label>
            <input
              value={id}
              placeholder="id item"
              type="number"
              {...register("id", { min: 1, max: 20 })}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setID(Number(event.target.value))
              }
            />
            {errors.id?.type === "max" && <p>ID must be less than 20</p>}
            {errors.id?.type === "min" && <p>ID must be more than 1</p>}
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="title item"
              value={updateData.title}
              {...register("title", {
                required: true,
                maxLength: 20,
                minLength: 5,
              })}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUpdateData((prevData) => ({
                  ...prevData,
                  title: event.target.value,
                }))
              }
            />
            {errors.title?.type === "required" && (
              <p>The title must be entered</p>
            )}
            {errors.title?.type === "maxLength" && (
              <p>Title must be less than 20 characters</p>
            )}
            {errors.title?.type === "minlength" && (
              <p>Title must be more than 5 characters</p>
            )}
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              placeholder="price item"
              value={updateData.price}
              {...register("price", { required: true, min: 1, max: 2000 })}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUpdateData((prevData) => ({
                  ...prevData,
                  price: Number(event.target.value),
                }))
              }
            />
            {errors.price?.type === "required" && (
              <p>The price must be entered</p>
            )}
            {errors.price?.type === "min" && <p>Price must be more than $1</p>}
            {errors.price?.type === "max" && (
              <p>Price must be less than $2000</p>
            )}
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              placeholder="description item"
              value={updateData.description}
              {...register("description", {
                required: true,
                maxLength: 40,
                minLength: 5,
              })}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUpdateData((prevData) => ({
                  ...prevData,
                  description: event.target.value,
                }))
              }
            />
            {errors.description?.type === "required" && (
              <p>The description must be entered</p>
            )}
            {errors.description?.type === "maxLength" && (
              <p>Description must be less than 40 characters</p>
            )}
            {errors.description?.type === "minLength" && (
              <p>Description must be more than 5 characters</p>
            )}
          </div>
          <button type="submit" onClick={updateHandler}>
            Update
          </button>
        </form>
      </div>
    </>
  );
}
