import React, { useState } from "react";
import Modal from "react-modal";
import colorIcon from "../colorIcon.png";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from "react-intl";

function TableCloths() {
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
      vendorCode: "art.04c47",
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>14/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>86</span>
        </span>
      ),
      weight: (
        <span>
          <span>192</span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      width: (
        <span>
          <span>155</span>
          <span>
            <FormattedMessage id="cm" />
          </span>
        </span>
      ),
      colors: [
        "#F0EDE2",
        "#F5ECD0",
        "#F4ECC2",
        "#FDD19C",
        "#E3BC8E",
        "#C86656",
        "#12674A",
        "#363756",
      ],
    },
    {
      id: 2,
      vendorCode: "art.06c26",
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>64/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>36</span>
        </span>
      ),
      weight: (
        <span>
          <span>224</span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      width: (
        <span>
          <span>155</span>
          <span>
            <FormattedMessage id="cm" />
          </span>
        </span>
      ),
      colors: ["#", "#", "#", "#"],
    },
    {
      id: 3,
      vendorCode: "art.08c6",
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>47/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>53</span>
        </span>
      ),
      weight: (
        <span>
          <span>238</span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      width: (
        <span>
          <span>305</span>
          <span>
            <FormattedMessage id="cm" />
          </span>
        </span>
      ),
      colors: [
        "#F0EDE2",
        "#F5ECD0",
        "#E4C49D",
        "#5C4939",
        "#9E1030",
        "#C9D3DC",
      ],
    },
    {
      id: 4,
      vendorCode: "art.13c5",
      comp: (
        <span>
          <span>
            <FormattedMessage id="lin" />
          </span>
          <span>23/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>77</span>
        </span>
      ),
      weight: (
        <span>
          <span>200</span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      width: (
        <span>
          <span>155</span>
          <span>
            <FormattedMessage id="cm" />
          </span>
        </span>
      ),
      colors: ["#", "#", "#", "#"],
    },
  ];

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
    <div className="table-cloths">
      <div className="title">
        <FormattedMessage id="tableCloths" />
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
            <FormattedMessage id="width" />
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
            <span>{product.width}</span>
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
            <h1>Vendor Code: {currentProduct.vendorCode}</h1>
            <h2>weight: {currentProduct.weight}</h2>
            <h2>comp: {currentProduct.comp}</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TableCloths;
