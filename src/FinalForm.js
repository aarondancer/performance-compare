import React from "react";
import { Form, Field } from "react-final-form";
import createArrayWithNumbers from "./createArrayWithNumbers";
import Input from "./Input";

function validateEmail(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }

  return error;
}

function validateUsername(value) {
  let error;

  if (value === "admin") {
    error = "Nice try!";
  }

  return error;
}

export default function FormTest() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, errors, touched }) => (
        <div style={{ flex: 1 }}>
          <h1>Final Form</h1>
          <form onSubmit={handleSubmit}>
            {createArrayWithNumbers(10).map((key) => {
              return (
                <Field
                  key={key}
                  name={`email${key}`}
                  validate={validateEmail}
                  component={Input}
                />
              );
            })}

            {errors.email && touched.email && errors.email}

            <Field
              name="username"
              validate={validateUsername}
              component={Input}
            />
            {errors.username && touched.username && errors.username}

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </Form>
  );
}
