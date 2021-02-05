import React from "react";
import { FormattedMessage } from "react-intl";
import ProductTable from "../components/ProductTable";
import WorkClothesList from "../components/WorkClothesList";
import "../components/css/Fabrics.css";
import FilterList from "../components/FilterList";
import TableClothsList from "../components/TableClothsList";
import { Helmet } from "react-helmet";

function Fabrics() {
  const workClothesProducts = WorkClothesList;
  const tableClothsProducts = TableClothsList;
  const filterProducts = FilterList;

  return (
    <div>
      <Helmet>
        <title>
          UAB Mogotex Baltic - Audiniai darbo rūbams, Staltiesiniai audiniai,
          Mišriapluoščiai audiniai, Kamufliažiniai audiniai, Vilnius.
        </title>
        <meta
          name="description"
          content="Audiniai darbo rūbams, Staltiesiniai audiniai, Mišriapluoščiai audiniai, Kamufliažiniai audiniai, Vilnius. UAB „Mogotex Baltic“ buvo įkurta 2000 m. Bendrovė yra didžiausio Baltarusijos tekstilės gamintojo „Mogotex“ atstovė Baltijos šalyse. Siūlomų produktų asortimente yra didelis audinių, skirtų įvairioms pramonės šakoms, statyboms, medicinai, poilsiui ir jėgos struktūroms, darbo drabužiams pasirinkimas. Taip pat siūlome namų tekstilės audinius ir kt."
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
