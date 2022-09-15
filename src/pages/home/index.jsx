import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import image from "../../assets/pyptaskagilteacher.jpeg"
import Container from "@mui/material/Container"

function HomePage() {
  return (
    <Fragment>
      <Box sx={{ 
        flexGrow: 1
         }}>
        <AppBar sx={{
            backgroundColor: "hotpink",
        }} position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PYP CLASSWORK
            </Typography>
            <div>
                <Button sx={{
                    color: "blue",
                    backgroundColor: "pink"
                }} disabled color="inherit">Agil Atakishiyev</Button>
                <Button color="inherit">Logout</Button>
            </div>
            <div style={{display:"none"}}>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Register</Button>
            </div>
         
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg" sx={{
        marginLeft: "100px",
        
      }}>
        <div style={{height: "111vh",marginTop: "70px"}}>
            <img src={image} alt="agilteacher" />
        </div>
      </Container>
    
    </Fragment>
  );
}

export default HomePage;
