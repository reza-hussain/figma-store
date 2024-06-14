import React from "react";

import "./button.scss";

const Button = ({ children, ...rest }) => {
  return (
    <div {...rest} className="button">
      {children}
    </div>
  );
};

export default Button;
