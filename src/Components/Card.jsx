import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../Components/images/s1.jpg";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">{props.title}</h4>
            <p className="card-text">{props.description}</p>
            <NavLink to="#" className="btn btn-primary">
              Know more
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
