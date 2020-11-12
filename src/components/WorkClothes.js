import React, { useState } from "react";
import Modal from "./Modal";

function WorkClothes() {
  const [selectedItem, setSelectedsItem] = useState();
  const products = [
    {
      id: 1,
      vendorCode: "art.3c17",
      comp: "cot23/pess77",
      weight: "139 g/m²",
      colors: ["yellow", "red", "green"],
    },
    {
      id: 2,
      vendorCode: "art.4c5",
      comp: "cot51/pes49",
      weight: "210 g/m²",
      colors: ["red", "green"],
    },
    {
      id: 3,
      vendorCode: "art.06c13",
      comp: "cot33/pes67",
      weight: "248 g/m²",
      colors: ["yellow", "red", "green"],
    },
    {
      id: 4,
      vendorCode: "art.00c65",
      comp: "cot76/pes24",
      weight: "254 g/m²",
      colors: ["yellow", "red", "green"],
    },
    {
      id: 5,
      vendorCode: "art.09c6",
      comp: "cot50/pes50",
      weight: "224 g/m²",
      colors: ["yellow", "red", "green"],
    },
    {
      id: 6,
      vendorCode: "art.05c8",
      comp: "pes100",
      weight: "141 g/m²",
      colors: ["yellow", "red", "green"],
    },
    {
      id: 7,
      vendorCode: "art.8tc15",
      comp: "pes100",
      weight: "133 g/m²",
      colors: ["yellow", "red", "green"],
    },
    {
      id: 8,
      vendorCode: "art.4c5 + KMF",
      comp: "cot51/pes49",
      weight: "210 g/m²",
      colors: ["yellow", "red", "green"],
    },
    // { id: 2, vendorCode: "efgh", color: "red" },
    // { id: 3, vendorCode: "ijkl", color: "blue" },
  ];

  const selectProductHandler = (product) => {
    setSelectedsItem(product);
    openModal(selectedItem);
  };

  const openModal = (product) => {
    console.log(product);
  };
  return (
    <div className="workclothes">
      {/* <div className="DarboRubams"> */}
      <label>Darbo rūbams ir poilsiui</label>
      <div className="button-links">
        <label>
          <label>Vendor Code </label>
          <label>Comp</label>
          <label>Weight</label>
          <label>Colors</label>
        </label>
        {products.map((product) => (
          <button
            onClick={() => selectProductHandler(product)}
            key={product.id}
            className="product-button"
          >
            <span>{product.vendorCode}</span>
            <span>{product.comp}</span>
            <span>{product.weight}</span>
            <span>{product.colors[0]}</span>
          </button>
        ))}
      </div>
      <Modal />
    </div>
  );
}

export default WorkClothes;
