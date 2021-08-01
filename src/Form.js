import React from "react";
import { useForm } from "react-hook-form";
import createArrayWithNumbers from "./createArrayWithNumbers";
import Input from "./Input";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{ flex: 1 }}>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createArrayWithNumbers(10).map((key) => {
          return (
            <Input
              key={key}
              {...register(`email${key}`, {
                required: "This is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email",
                },
              })}
            />
          );
        })}
        {errors.email && <div>{errors.email.message}</div>}

        <Input
          {...register("username", {
            validate: (value) => (value === "admin" ? true : "Nice try!"),
          })}
        />
        {errors.username && <div>{errors.username.message}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
