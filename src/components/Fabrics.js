import React from "react";
import WorkClothes from "./WorkClothes";
import TableCloths from "./TableCloths";
import { FormattedMessage } from "react-intl";
import "./css/Fabrics.css";

function Fabrics() {
  const messageClickHandler = () => {
    window.open("http://www.mogotex.com");
  };
  return (
    <div>
      <div className="fabrics">
        <WorkClothes />
        <TableCloths />
      </div>
      <div
        className="message"
        onClick={() => {
          messageClickHandler();
        }}
      >
        <div className="message-info">
          <FormattedMessage id="Message" />
        </div>
      </div>
      {/* <div className="message">
        <FormattedMessage id="Message" />
        <span>
          <a href="http://www.mogotex.com">www.mogotex.com</a>
        </span>
      </div> */}
    </div>
  );
}

export default Fabrics;
