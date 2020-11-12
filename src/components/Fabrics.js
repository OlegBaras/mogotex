import React from "react";
import WorkClothes from "./WorkClothes";
import TableCloths from "./TableCloths";

function Fabrics() {
  return (
    <div className="fabrics">
      <WorkClothes />
      <TableCloths />

      <div className="filters">
        <label>Filtrams</label>
        <p>03c35 sudėtis, svoris</p>
        <p>5c30 sudėtis, svoris</p>
      </div>
    </div>
  );
}

export default Fabrics;
