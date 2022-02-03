import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="container  mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, index) => {
                return (
                  <Card
                    img={val.imgsrc}
                    title={val.title}
                    key={index}
                    description={val.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
