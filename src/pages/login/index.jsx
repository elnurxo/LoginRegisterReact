import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useCookies } from "react-cookie";
import * as yup from "yup";

function Index() {
    const [cookies, setCookie] = useCookies(["member"]);

    function CreateCookie() {
      setCookie("member", "krissanawat", {
        path: "/"
      });
    }

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
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
    const handleLogin = (data) => console.log(data);
    const validationOpt = { resolver: yupResolver(schema) }

    const { register, handleSubmit, formState } = useForm(validationOpt)
  
    const { errors } = formState

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
                <div style={{ color: "red", fontSize: "12px" }}>{errors.email?.message}</div>
                <TextField id="standard-basic1" label="Password..." variant="standard" type="password"
                    sx={{
                        display: 'block',
                        mb: 2,
                    }}
                    name="password"
                    {...register('password')}
                />
                <div style={{ color: "red", fontSize: "12px" }}>{errors.password?.message}</div>
                <Button onClick={CreateCookie} variant="contained"
                    sx={{
                        display: 'block',
                        width: 200
                    }}
                    type="submit"
                >Login</Button>
                 <p>Show cookie : </p>{cookies.member && <p>{cookies.member}</p>}  
            </form>

        </div>
    )
}

export default Index