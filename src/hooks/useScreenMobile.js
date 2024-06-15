import { useEffect, useState } from "react";

// context

export default function useScreenMobile({
  size = 768,
  mobileFunc = () => {},
  desktopFunc = () => {},
}) {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window?.screen?.availWidth <= size) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= size) {
      mobileFunc();
    } else {
      desktopFunc();
    }

    // eslint-disable-next-line
  }, [isMobileView]);

  return isMobileView;
}
