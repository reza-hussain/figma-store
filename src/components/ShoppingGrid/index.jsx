import React, { useEffect, useState } from "react";
import {
  BsJoystick,
  BsFillLightningChargeFill,
  BsHourglassSplit,
  BsPalette2,
  BsPatchCheckFill,
  BsFillSunFill,
  BsFillSuitcase2Fill,
} from "react-icons/bs";

import { createClient } from "pexels";

import useScreenMobile from "../../hooks/useScreenMobile";
import GridCard from "../GridCard";
import "./shoppingGrid.scss";

const ShoppingGrid = () => {
  const isMobile = useScreenMobile({ size: 768 });
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

      const query = "clothing";

      const response = await client.photos.search({ query, per_page: 12 });

      setPhotos(response?.photos);
    })();
  }, []);

  return (
    <div className="shoppingGrid">
      <div className="shoppingGridText">
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
        <h3>YOU</h3>
        <BsFillSunFill fill="#ffc700" size={isMobile ? 22 : 40} />
        <h3>AND</h3>
        <BsFillSuitcase2Fill fill="#f24e1e" size={isMobile ? 22 : 40} />
        <h3>YOUR</h3>
        <BsPatchCheckFill fill="#10a958" size={isMobile ? 22 : 40} />
        <h3>FRIENDS</h3>
      </div>

      <div className="shoppingGridCards">
        {photos?.map((photo) => (
          <GridCard data={photo} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingGrid;
