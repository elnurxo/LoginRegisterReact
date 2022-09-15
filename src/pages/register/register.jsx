import { TextField, Button } from "@mui/material";
import React from "react";

import "./register.css";

function Register() {
  return (
    <div className="register-page">
      <form>
        <h1>Register Page</h1>
        <TextField
          id="standard-basic"
          label="Name and Surename..."
          variant="standard"
          type="text"
          sx={{display: "block"}}
        />
        <TextField
          id="standard-basic"
          label="Email..."
          variant="standard"
          type="mail"
          sx={{ display: "block"}}
        />
        <TextField
          id="standard-basic"
          label="Password..."
          variant="standard"
          type="password"
          sx={{ display: "block"}}
        />
        <Button variant="contained" sx={{margin:"20px 0"}} >Register</Button>
      </form>
    </div>
  );
}

export default Register;
