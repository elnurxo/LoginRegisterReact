import React from 'react';
import { TextField, Button } from '@mui/material';
import { flexbox } from '@mui/system';

function Index() {
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
            >
                <TextField id="standard-basic" label="Email..." variant="standard" type="mail"
                    sx={{
                        display: 'block',
                        mb: 2,
                    }}
                />
                <TextField id="standard-basic" label="Password..." variant="standard" type="password"
                    sx={{
                        display: 'block',
                        mb: 2,
                    }}
                />
                <Button variant="contained"
                    sx={{
                        display: 'block',
                        width: 200
                    }}
                >Login</Button>
            </form>

        </div>
    )
}

export default Index