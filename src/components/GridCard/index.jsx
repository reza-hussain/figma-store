import React from "react";

import "./gridCard.scss";

const GridCard = ({ data }) => {
  return (
    <div className="gridCard">
      <div className="gridCardImage">
        <img src={data.src.portrait} alt="" />
      </div>
      <div className="gridCardText">
        <p>{data.alt}</p>

        <span>${(50 * Math.random()).toFixed(0)}</span>
      </div>
    </div>
  );
};

export default GridCard;
