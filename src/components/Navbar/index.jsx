import React, { useState } from "react";
import Button from "../Button";

// hooks
import useScreenMobile from "../../hooks/useScreenMobile";

// styles
import "./navbar.scss";
import Hamburger from "../../Icons/Hamburger";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const isMobile = useScreenMobile({
    size: 768,
  });

  return (
    <div className="navbar">
      <div className={`navbarSearch ${showSearch ? "navbarSearchActive" : ""}`}>
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbarMain">
        <div className="navbarLeft">
          {!isMobile ? (
            <>
              <Button>Shop</Button>
              <Button>About</Button>
              <img
                src="//store.figma.com/cdn/shop/t/13/assets/icon-search.static.svg?v=50573694897280823451714661986"
                alt="Search"
                onClick={() => setShowSearch(!showSearch)}
              />
            </>
          ) : (
            <>
              <Button>
                <Hamburger />
              </Button>
              <img
                src="//store.figma.com/cdn/shop/t/13/assets/icon-search.static.svg?v=50573694897280823451714661986"
                alt="Search"
                onClick={() => setShowSearch(!showSearch)}
              />
            </>
          )}
        </div>

        <div className="navbarCenter">THE FIGMA STORE</div>

        <div className="navbarRight">
          <Button style={isMobile ? { width: "50px", padding: "8px" } : {}}>
            {!isMobile ? "Cart" : ""}
            <span>0</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
