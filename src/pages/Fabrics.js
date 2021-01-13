import React from "react";
import { FormattedMessage } from "react-intl";
import WorkClothes from "../components/WorkClothes";
import TableCloths from "../components/TableCloths";
import "../components/css/Fabrics.css";

function Fabrics() {
  return (
    <div>
      <div className="fabrics">
        <WorkClothes />
        <TableCloths />
      </div>
      <div
        className="message"
        onClick={() => window.open("http://www.mogotex.com")}
      >
        <div className="message-info">
          <FormattedMessage id="Message" />
        </div>
      </div>
    </div>
  );
}

export default Fabrics;
