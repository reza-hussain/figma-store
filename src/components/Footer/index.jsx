import React from "react";

import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="marquee">
        <span>I</span>
        <span>HATE</span>
        <span>MAKING</span>
        <span>FOOTERS</span>
        <span>THAT&apos;S</span>
        <span>WHY</span>
        <span>YOU</span>
        <span>CAN&apos;T</span>
        <span>SEE</span>
        <span>ONE</span>
        <span>ON</span>
        <span>THIS</span>
        <span>PAGE</span>
      </ul>

      <ul aria-hidden={true} className="marquee">
        <span>I</span>
        <span>HATE</span>
        <span>MAKING</span>
        <span>FOOTERS</span>
        <span>THAT&apos;S</span>
        <span>WHY</span>
        <span>YOU</span>
        <span>CAN&apos;T</span>
        <span>SEE</span>
        <span>ONE</span>
        <span>ON</span>
        <span>THIS</span>
        <span>PAGE</span>
      </ul>
    </div>
  );
};

export default Footer;
