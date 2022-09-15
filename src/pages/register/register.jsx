import { TextField, Button } from "@mui/material";
import React from "react";

import "./register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function Register() {

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    fullName: yup.string().min(4).required("Name is required"),
    password: yup.string()
      .min(8, "Password too short")
      .test("isValidPass", " is not valid", (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbole = /[!@#%&]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      })
      .required('Password is required'),
  }).required();

  const validationOpt = { resolver: yupResolver(schema) }

  const { register, handleSubmit, formState } = useForm(validationOpt)

  const { errors } = formState

  const handleLRegister = (data) => console.log(data);

  return (
    <div className="register-page">
      <form
        onSubmit={handleSubmit(handleLRegister)}
      >
        <h1>Register Page</h1>
        <TextField
          id="standard-basic"
          label="Name and Surename..."
          name="fullName"
          variant="standard"
          type="text"
          sx={{ display: "block" }}
          {...register('fullName')}
        />
        <div style={{ color: "red", fontSize: "12px" }}>{errors.fullName?.message}</div>
        <TextField
          id="standard-basic1"
          label="Email..."
          variant="standard"
          name="email"
          type="mail"
          sx={{ display: "block" }}
          {...register('email')}

        />
        <div style={{ color: "red", fontSize: "12px" }}>{errors.email?.message}</div>
        <TextField
          id="standard-basic2"
          label="Password..."
          variant="standard"
          name="password"
          type="password"
          sx={{ display: "block" }}
          {...register('password')}

        />
        <div
          style={{ color: "red", fontSize: "12px" }}
        >{errors.password?.message}</div>
        <Button variant="contained" sx={{ margin: "20px 0" }} type="submit">Register</Button>
      </form>
    </div>
  );
}

export default Register;
