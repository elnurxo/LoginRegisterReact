import React, { Fragment } from "react";
import image from "../../assets/pyptaskagilteacher.jpeg";
import Container from "@mui/material/Container";

function HomePage() {
  return (
    <Fragment>
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
