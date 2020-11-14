import React, { useState } from "react";
import Modal from "react-modal";
import colorIcon from "../colorIcon.png";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "70%",
  },
};

Modal.setAppElement("#root");

function WorkClothes() {
  const products = [
    {
      id: 1,
      vendorCode: "art.3c17",
      comp: "cot23/pess77",
      weight: "139 g/m²",
      colors: [
        "#FFDA29",
        "#998978",
        "#58423F",
        "#8B4963",
        "#BB4F72",
        "#E982A0",
        "#BE132D",
        "#525A5B",
        "#08589D",
        "#8C9092", //?
        "#8D8F8F", //?
        "#2E2F36",
        "#42ADD5",
        "#81BBA1",
        "#7CB7A3",
        "#4D826C",
      ],
    },
    {
      id: 2,
      vendorCode: "art.4c5",
      comp: "cot51/pes49",
      weight: "210 g/m²",
      colors: ["red", "green", "blue"],
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
      vendorCode: "art.4c5+KMF",
      comp: "cot51/pes49",
      weight: "210 g/m²",
      colors: ["orange", "lightblue", "pink"],
    },
  ];

  //let subtitle;
  let CardColor;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [color, setColor] = useState("");

  const openModal = (product) => {
    setIsOpen(true);
    setCurrentProduct(product);
  };

  const afterOpenModal = () => {
    //  subtitle.style.color = "green";
    //console.log(currentProduct.id);
    setColor(currentProduct.colors[0]);
  };

  const closeModal = () => {
    setIsOpen(false);
    setColor(null);
  };

  const changeCardColor = (color) => {
    setColor(color);
    //console.log(color);
  };

  return (
    <div className="workclothes">
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
            onClick={() => openModal(product)}
            key={uuidv4()}
            className="product-button"
          >
            <span>{product.vendorCode}</span>
            <span>{product.comp}</span>
            <span>{product.weight}</span>
            <span>
              <img src={colorIcon}></img>
            </span>
          </button>
        ))}
      </div>
      <Modal
        className="active-modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        currentProduct={currentProduct}
      >
        <div className="CardColor" style={{ backgroundColor: color }}>
          {color}
        </div>
        <div className="CardInfo">
          <div className="CardColorSelection">
            {currentProduct.colors.map((color) => (
              <button
                onClick={() => {
                  changeCardColor(color);
                  console.log(color);
                }}
                key={uuidv4()}
              >
                {color}
              </button>
            ))}
          </div>
          <div className="CardColorText">
            <h1>{currentProduct.vendorCode}</h1>
            <h2>{currentProduct.weight}</h2>
            <h2>{currentProduct.comp}</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default WorkClothes;
