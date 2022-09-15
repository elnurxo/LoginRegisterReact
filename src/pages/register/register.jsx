import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

import "./register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([{
    name: "AGILATAKISIYEV",
    email: "agilatakisiyev@gmail.com",
    password: "1234567"
  }]);

  const createTable = (e) => {
    data.forEach(item=>{
      if(item.email!==email){
        setData([
          ...data,
          {
            name: name,
            email: email,
            password: password
          },
        ]);
      }else{
        alert("BU email qeydiyyatdan kecib")
      }
    })
    
    console.log(data);
  };
  

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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          style={{ color: "red", fontSize: "12px" }}
        >{errors.password?.message}</div>
        <Button variant="contained" sx={{ margin: "20px 0", width:"100%" }} onClick={(e) => (createTable())} type="submit">Register</Button>
      </form>
    </div>
  );
}

export default Register;
