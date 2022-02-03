import React from "react";
import Common from "./Common";
import Img from "./images/img2.svg";
const Home = () => {
  const title = "Welcome to the world of ";
  return (
    <>
      <Common
        title={title}
        visit="/services"
        img={Img}
        linktitle="Get Started"
      />
    </>
  );
};

export default Home;
