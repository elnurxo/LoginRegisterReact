import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function Index() {
    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string()
        .min(8, "Password too short").test("isValidPass", " is not valid", (value, context) => {
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
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const handleLogin = (data) => console.log(data);




    return (

        <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            height: "60vh"
        }}>
            <form
                style={{
                    padding: "40px",
                    border: "1px solid black",
                    display: "inline-block",
                    borderRadius: "15px"
                }}
                onSubmit={handleSubmit(handleLogin)}
            >
                <TextField id="standard-basic" label="Email..." variant="standard" type="mail"
                    sx={{
                        display: 'block',
                        mb: 2,
                    }}
                    name="email"
                    {...register('email')}
                />
                <TextField id="standard-basic1" label="Password..." variant="standard" type="password"
                    sx={{
                        display: 'block',
                        mb: 2,
                    }}
                    name="password"
                    {...register('password')}
                />
                <Button variant="contained"
                    sx={{
                        display: 'block',
                        width: 200
                    }}
                    type="submit"
                >Login</Button>
            </form>

        </div>
    )
}

export default Index