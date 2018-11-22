import React from "react";
import { Media } from "reactstrap";

const Dish = props => {
  return (
    <Media tag="li" className="col-12 mt-5">
      <Media left middle>
        <Media object src={props.image} alt={props.name} />
      </Media>
      <Media body className="ml-5">
        <Media heading>{props.name}</Media>
        <p>{props.description}</p>
      </Media>
    </Media>
  );
};

export default Dish;
