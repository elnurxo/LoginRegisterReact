import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

import "./register.css";

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
    
    setData([
      ...data,
      {
        name: name,
        email: email,
        password: password
      },
    ]);
    console.log(data);
  };
  
  return (
    <div className="register-page">
      <form>
        <h1>Register Page</h1>
        <TextField
          id="standard-basic"
          label="Name and Surename..."
          variant="standard"
          type="text"
          sx={{ display: "block" }}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email..."
          variant="standard"
          type="mail"
          sx={{ display: "block" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Password..."
          variant="standard"
          type="password"
          sx={{ display: "block" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ margin: "20px 0" }}
          onClick={(e) => (createTable())}
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
