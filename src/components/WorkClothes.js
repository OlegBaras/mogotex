import React, { useState } from "react";
import Modal from "react-modal";
import colorIcon from "../colorIcon.png";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from "react-intl";

function WorkClothes() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      height: "70%",
      borderRadius: "10px",
    },
    overlay: {
      // backgroundColor: "#A9A9A9",
      backgroundColor: "white",
    },
  };

  Modal.setAppElement("#root");

  const products = [
    {
      id: 1,
      vendorCode: "art.3c17",
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>23/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>77</span>
        </span>
      ),
      // comp: "cot23/pess77",
      weight: (
        <span>
          <span>139</span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      //"139 g/m²",
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
        "#8D8F8F",
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
      colors: [
        "#5B5149",
        "#8A6F48",
        "#FFAF12",
        "#F9633B",
        "#83CB53",
        "#6A3331",
        "#B92636",
        "#686D6C",
        "#9C90C4",
        "#3D5E8C",
        "#3C3F4A",
        "#243F6C",
        "#473951",
        "#313D64",
        "#2C313D",
        "#6D8994",
        "#12674A",
        "#264A48",
        "#726F70",
        "#C0D725",
      ],
    },
    {
      id: 3,
      vendorCode: "art.06c13",
      comp: "cot33/pes67",
      weight: "248 g/m²",
      colors: [
        "#686D6C",
        "#08589D",
        "#2C313D",
        "#FFDA29",
        "#3C3F4A",
        "#FF7420",
      ],
    },
    {
      id: 4,
      vendorCode: "art.00c65",
      comp: "cot76/pes24",
      weight: "254 g/m²",
      colors: [
        "#686D6C",
        "#08589D",
        "#2C313D",
        "#473951",
        "#313D64",
        "#FF7420",
      ],
    },
    {
      id: 5,
      vendorCode: "art.09c6",
      comp: "cot50/pes50",
      weight: "224 g/m²",
      colors: ["#8A6F48", "#08589D", "#2C313D", "#473951"],
    },
    {
      id: 6,
      vendorCode: "art.05c8",
      comp: "pes100",
      weight: "141 g/m²",
      colors: ["#5B5149", "#D01C1F", "#2C313D", "#6A3331", "#363838"],
    },
    {
      id: 7,
      vendorCode: "art.8tc15",
      comp: "pes100",
      weight: "133 g/m²",
      colors: ["#5B5149", "#F9633B", "#2C313D", "#C0D725", "#998978"],
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
  // let CardColor;

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
      <div className="title">
        <FormattedMessage id="workClothes" />
      </div>

      <div className="button-links">
        <div className="button-links-tags">
          <p>
            <FormattedMessage id="vendor-code" />
          </p>
          <p>
            <FormattedMessage id="Comp" />
          </p>
          <p>
            <FormattedMessage id="Weight" />
          </p>
          <p>
            <FormattedMessage id="Colors" />
          </p>
        </div>
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
              <img alt="icon" src={colorIcon}></img>
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
                className="color-button"
                style={{ background: `${color}` }}
                onClick={() => {
                  changeCardColor(color);
                  console.log(`"${color}"`);
                }}
                key={uuidv4()}
              >
                {color}
              </button>
            ))}
          </div>
          <div className="CardColorText" style={{ color: `${color}` }}>
            <h1>
              <span>
                <FormattedMessage id="vendor-code" />
              </span>
              : {currentProduct.vendorCode}
            </h1>
            <h2>
              <span>
                <FormattedMessage id="Weight" />
              </span>
              : {currentProduct.weight}
            </h2>
            <h2>comp: {currentProduct.comp}</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default WorkClothes;
