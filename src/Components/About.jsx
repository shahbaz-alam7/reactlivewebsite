import React from "react";
import Common from "./Common";
import Img from "../Components/images/hero-img.png";

const About = () => {
  const title = "Grow Your Bussiness With ";
  return (
    <>
      <Common
        title={title}
        visit="/contact"
        img={Img}
        linktitle="Contact Now"
      />
    </>
  );
};

export default About;
