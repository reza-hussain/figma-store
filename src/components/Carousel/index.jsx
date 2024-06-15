import React from "react";
import {
  CloudShape,
  Ellipse,
  HourGlassShape,
  Octagon,
} from "../CarouselShapes";

import { Splide, SplideSlide } from "@splidejs/react-splide";

// styles
import "@splidejs/react-splide/css";
import "./carousel.scss";
import useScreenMobile from "../../hooks/useScreenMobile";

const Carousel = () => {
  const isMobile = useScreenMobile({
    size: 768,
  });

  const splideOptions = {
    arrows: false,
    drag: isMobile ? true : "free",
    perPage: isMobile ? 1 : 2,
    gap: isMobile ? "0px" : "-6rem",
    autoWidth: isMobile ? false : true,
    pagination: false,
    type: "loop",
    snap: true,
    fixedWidth: "370px",
  };

  return (
    <div className="carousel">
      <Splide options={splideOptions}>
        <SplideSlide>
          <Octagon />
        </SplideSlide>

        <SplideSlide>
          <HourGlassShape />
        </SplideSlide>
        <SplideSlide>
          <CloudShape />
        </SplideSlide>
        <SplideSlide>
          <Ellipse />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
