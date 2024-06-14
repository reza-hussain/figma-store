import React from "react";
import {
  BsJoystick,
  BsFillLightningChargeFill,
  BsHourglassSplit,
  BsPalette2,
  BsPatchCheckFill,
  BsFillSunFill,
  BsFillSuitcase2Fill,
} from "react-icons/bs";

import "./shoppingGrid.scss";
import useScreenMobile from "../../hooks/useScreenMobile";

const ShoppingGrid = () => {
  const isMobile = useScreenMobile({ size: 768 });

  return (
    <div className="shoppingGrid">
      <h3>FIGMA'S</h3>
      <BsJoystick fill="#10a958" size={isMobile ? 22 : 40} />
      <h3>COLLECTION</h3>
      <BsHourglassSplit fill="#F24E1E" size={isMobile ? 22 : 40} />
      <h3>OF</h3>
      <h3>
        <a href="/">LAYERS</a>
      </h3>
      <BsPalette2 fill="#f24e1e" size={isMobile ? 22 : 40} />
      <h3>AND</h3>
      <BsFillLightningChargeFill fill="#ffc700" size={isMobile ? 22 : 40} />
      <h3>
        <a href="/">COMPONENTS</a>
      </h3>
      <h3>FOR</h3>
      <BsFillSunFill fill="#ffc700" size={isMobile ? 22 : 40} />
      <h3>YOU</h3>
      <h3>AND</h3>
      <BsFillSuitcase2Fill fill="#f24e1e" size={isMobile ? 22 : 40} />
      <h3>YOUR</h3>
      <BsPatchCheckFill fill="#10a958" size={isMobile ? 22 : 40} />
      <h3>FRIENDS</h3>
    </div>
  );
};

export default ShoppingGrid;
