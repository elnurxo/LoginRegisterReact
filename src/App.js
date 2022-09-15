import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
<<<<<<< HEAD
import Login from "./pages/login/index";
import Register from "./pages/register/register";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
=======
// import Login from "./pages/login/index"
// import Register from "./pages/register/register.jsx"
// import Register from "./pages/register/register";


>>>>>>> 28562a058135bdf9e183ed14f84f9c74aee03655

function App() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar
          sx={{
            backgroundColor: "hotpink",
          }}
          position="fixed"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{color:"white",textDecoration:"none",fontWeight:"bolder"}} to="/">HomePage</Link>
            </Typography>
            <div style={{ display: "none" }}>
              <Button
                sx={{
                  color: "blue",
                  backgroundColor: "pink",
                }}
                disabled
                color="inherit"
              >
                Agil Atakishiyev
              </Button>
              <Button color="inherit">Logout</Button>
            </div>
            <div>
              <Button color="inherit">
                <Link
                  to="/login"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/register"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Register
                </Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
