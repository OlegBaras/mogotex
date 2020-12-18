import React from "react";
import WorkClothes from "./WorkClothes";
import TableCloths from "./TableCloths";
import { FormattedMessage } from "react-intl";
function Fabrics() {
  return (
    <div>
      <div className="fabrics">
        <WorkClothes />
        <TableCloths />
      </div>
      <div className="message">
        <FormattedMessage id="Message" />
        <span>
          <a href="http://www.mogotex.com">www.mogotex.com</a>
        </span>
      </div>
    </div>
  );
}

export default Fabrics;
