import React from "react";
import { FormattedMessage } from "react-intl";
import ProductTable from "../components/ProductTable";
import WorkClothesList from "../components/WorkClothesList";
import "../components/css/Fabrics.css";
import FilterList from "../components/FilterList";
import TableClothsList from "../components/TableClothsList";

function Fabrics() {
  const workClothesProducts = WorkClothesList;
  const tableClothsProducts = TableClothsList;
  const filterProducts = FilterList;

  return (
    <div>
      <div className="fabrics">
        <div className="col-1">
          <ProductTable products={workClothesProducts} type="workClothes" />
        </div>
        <div className="col-2">
          <ProductTable products={tableClothsProducts} type="tableCloths" />
          <ProductTable products={filterProducts} type="Filtering" />
        </div>
      </div>
      <div className="message">
        <a
          href="http://www.mogotex.com"
          target="_blank"
          className="message-info"
          // onClick={() => window.open("http://www.mogotex.com")}
        >
          <FormattedMessage id="Message" />
        </a>
        {/* <div
          className="message-info"
          onClick={() => window.open("http://www.mogotex.com")}
        >
          <FormattedMessage id="Message" />
        </div> */}
      </div>
    </div>
  );
}

export default Fabrics;
