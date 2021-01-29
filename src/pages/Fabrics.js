import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ProductTable from "../components/ProductTable";
import WorkClothesList from "../components/WorkClothesList";
import "../components/css/Fabrics.css";
import FilterList from "../components/FilterList";
import TableClothsList from "../components/TableClothsList";
import { Helmet } from "react-helmet";
// import { LOCALES } from "../i18n/locales.js";

function Fabrics() {
  // const [language, setLanguage] = useState(LOCALES.LITHUANIAN);
  const workClothesProducts = WorkClothesList;
  const tableClothsProducts = TableClothsList;
  const filterProducts = FilterList;
  // const titleTest = language;

  // const setPageTitle = (language) => {
  //   console.log(language + "ciaiciaic");
  // };

  // useEffect(() => {
  //   setLanguage(window.localStorage.getItem("language"));
  //   console.log("effectas");
  //   setPageTitle(language);
  // }, [language]);

  return (
    <div>
      <Helmet>
        <title>UAB Mogotex Baltic - Fabrics</title>
        <meta
          name="description"
          content="Audiniai darbo rūbams, Staltiesiniai audiniai, Mišriapluoščiai audiniai, Kamufliažiniai audiniai, Vilnius"
        />
      </Helmet>
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
        >
          <FormattedMessage id="Message" />
        </a>
      </div>
    </div>
  );
}

export default Fabrics;
