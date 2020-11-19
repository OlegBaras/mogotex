import React from "react";
import WorkClothes from "./WorkClothes";
import TableCloths from "./TableCloths";
// import { clothData } from "///";

function Fabrics() {
  return (
    <div className="fabrics">
      <WorkClothes />
      <TableCloths />
      {/* <TableData title="For work" data={clothData} /> */}

      {/* <div className="filters">
        <label>Filtrams</label>
        <p>03c35 sudėtis, svoris</p>
        <p>5c30 sudėtis, svoris</p>
      </div> */}
    </div>
  );
}

export default Fabrics;

// function TableData({ title, data }) {
//   return (
//     <>
//       {title}
//       {data.map((d, index) => {
//         return <TableRow key={index} data={data} />;
//       })}
//     </>
//   );
// }

// function TableRow({ data }) {
//   return (
//     <tr>
//       <td>{data.code}</td>
//       <td>{data.composition}</td>
//       <td>{data.weigth}</td>
//       <td>{data.colors}</td>
//     </tr>
//   );
// }
