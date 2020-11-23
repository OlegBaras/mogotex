import React, { useState } from "react";
import Modal from "react-modal";
import colorIcon from "../colorIcon.png";
import camera from "../camera.png";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from "react-intl";
import "./WorkClothes.css";
import "./ImageCard.css";
import "../test1.png";
import "../test2.png";
import "../test3.png";
import "../test4.png";

function WorkClothes() {
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "60%",
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
      vendorCode: "3c17",
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
      weight: (
        <span>
          <span>139 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      colors: [
        { hex: "#FFDA29", mogotex: "010208" },
        { hex: "#998978", mogotex: "040302" },
        { hex: "#58423F", mogotex: "091001" },
        { hex: "#8B4963", mogotex: "140905" },
        { hex: "#BB4F72", mogotex: "150707" },
        { hex: "#E982A0", mogotex: "151920" },
        { hex: "#BE132D", mogotex: "181663" },
        { hex: "#525A5B", mogotex: "195004" },
        { hex: "#08589D", mogotex: "260706" },
        { hex: "#8D8F8F", mogotex: "210602" },
        { hex: "#2E2F36", mogotex: "261002" },
        { hex: "#42ADD5", mogotex: "270605" },
        { hex: "#81BBA1", mogotex: "380603" },
        { hex: "#7CB7A3", mogotex: "360704" },
        { hex: "#4D826C", mogotex: "380803" },
      ],
    },
    {
      id: 2,
      vendorCode: "4c5",
      comp: "cot51/pes49",
      weight: "210 g/m²",
      colors: [
        { hex: "#5B5149", mogotex: "020902" },
        { hex: "#8A6F48", mogotex: "030704" },
        { hex: "#FFAF12", mogotex: "040307" },
        { hex: "#F9633B", mogotex: "090508" },
        { hex: "#83CB53", mogotex: "160235" },
        { hex: "#6A3331", mogotex: "171002" },
        { hex: "#B92636", mogotex: "191663" },
        { hex: "#686D6C", mogotex: "230601" },
        { hex: "#9C90C4", mogotex: "230706" },
        { hex: "#3D5E8C", mogotex: "240906" },
        { hex: "#3C3F4A", mogotex: "250802" },
        { hex: "#243F6C", mogotex: "250906" },
        { hex: "#473951", mogotex: "251002" },
        { hex: "#313D64", mogotex: "260903" },
        { hex: "#2C313D", mogotex: "261005" },
        { hex: "#6D8994", mogotex: "320602" },
        { hex: "#12674A", mogotex: "390805" },
        { hex: "#264A48", mogotex: "360802" },
        { hex: "#726F70", mogotex: "184005" },
        { hex: "#C0D725", mogotex: "460205" },
      ],
    },
    {
      id: 3,
      vendorCode: "06c13",
      comp: "cot33/pes67",
      weight: "248 g/m²",
      colors: [
        { hex: "#686D6C", mogotex: "230601" },
        { hex: "#08589D", mogotex: "260706" },
        { hex: "#2C313D", mogotex: "261005" },
        { hex: "#FFDA29", mogotex: "010208" },
        { hex: "#3C3F4A", mogotex: "250802" },
        { hex: "#FF7420", mogotex: "16-1364" },
      ],
    },
    {
      id: 4,
      vendorCode: "00c65",
      comp: "cot76/pes24",
      weight: "254 g/m²",
      colors: [
        { hex: "#686D6C", mogotex: "230601" },
        { hex: "#08589D", mogotex: "260706" },
        { hex: "#2C313D", mogotex: "261005" },
        { hex: "#473951", mogotex: "251002" },
        { hex: "#313D64", mogotex: "260903" },
        { hex: "#FF7420", mogotex: "16-1364" },
      ],
    },
    {
      id: 5,
      vendorCode: "09c6+rip-stop",
      comp: "cot50/pes50",
      weight: "224 g/m²",
      colors: [
        { hex: "#8A6F48", mogotex: "030704" },
        { hex: "#08589D", mogotex: "260706" },
        { hex: "#2C313D", mogotex: "261005" },
        { hex: "#473951", mogotex: "251002" },
      ],
    },
    {
      id: 6,
      vendorCode: "05c8",
      comp: "pes100",
      weight: "141 g/m²",
      colors: [
        { hex: "#5B5149", mogotex: "020902" },
        { hex: "#D01C1F", mogotex: "16-1664" },
        { hex: "#2C313D", mogotex: "261005" },
        { hex: "#6A3331", mogotex: "171002" },
        { hex: "#363838", mogotex: "19-4305" },
      ],
    },
    {
      id: 7,
      vendorCode: "8tc15",
      comp: "pes100",
      weight: "133 g/m²",
      colors: [
        { hex: "#5B5149", mogotex: "020902" },
        { hex: "#F9633B", mogotex: "090508" },
        { hex: "#2C313D", mogotex: "261005" },
        { hex: "#C0D725", mogotex: "460205" },
        { hex: "#998978", mogotex: "040302" },
      ],
    },
    {
      id: 8,
      vendorCode: "4c5+KMF",
      comp: "cot51/pes49",
      weight: "210 g/m²",
      images: [
        { path: "/test1.png", title: "linas1" },
        { path: "/test2.png", title: "linas2" },
        { path: "/test3.png", title: "linas3" },
        { path: "/test4.png", title: "linas4" },
      ],
    },
  ];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const openModal = (product) => {
    setCurrentProduct(product);
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    currentProduct.colors
      ? setColor(currentProduct.colors[0])
      : setImage(currentProduct.images[0]);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeCardColor = (color) => {
    setColor(color);
  };

  return (
    <div className="workclothes">
      <div className="title">
        <FormattedMessage id="workClothes" />
      </div>

      <div className="button-links">
        <table className="table">
          <thead>
            <tr className="labels">
              <th>
                <FormattedMessage id="vendor-code" />
              </th>
              <th>
                <FormattedMessage id="Comp" />
              </th>
              <th>
                <FormattedMessage id="Weight" />
              </th>
              <th>
                <FormattedMessage id="Colors" />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                className="trRow"
                onClick={() => openModal(product)}
                key={uuidv4()}
              >
                <td>{product.vendorCode}</td>
                <td>{product.comp}</td>
                <td>{product.weight}</td>
                <td>
                  {product.colors ? (
                    <img alt="icon" src={colorIcon} />
                  ) : (
                    <img alt="icon" src={camera} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <div>MODAL</div>
        {/* COLORS MODAL */}
        {currentProduct.colors ? (
          <div>
            <div className="close">
              <button
                className="close-button"
                onClick={() => {
                  closeModal();
                }}
              >
                x
              </button>
            </div>
            <div
              className="CardColor"
              style={{ backgroundColor: `${color.hex}` }}
            ></div>
            <div className="CardInfo">
              <div className="CardColorSelection">
                <div className="color-label">{color.mogotex}</div>
                <div>
                  {currentProduct.colors.map((color) => (
                    <button
                      className="color-button"
                      style={{ background: `${color.hex}` }}
                      onClick={() => {
                        changeCardColor(color);
                      }}
                      key={uuidv4()}
                    >
                      {color.mogotex}
                    </button>
                  ))}
                </div>
              </div>
              <div className="CardColorText">
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
                <h2>
                  <span>
                    <FormattedMessage id="Comp" />
                  </span>
                  : {currentProduct.comp}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          // IMAGES MODAL
          <div>
            <div className="close">
              <button
                className="close-button"
                onClick={() => {
                  closeModal();
                }}
              >
                x
              </button>
            </div>
            {/* Image Gallery */}
            <div className="ImageCard">
              <div className="imageHolder">
                <img src={`images/fullsize${image.path}`} alt="fullimage" />
              </div>
              <div className="thumbnailHolder">
                {currentProduct.images.map((image) => (
                  <img
                    onClick={() => {
                      setImage(image);
                    }}
                    // src={`images/${image.path}`}
                    src={`images/thumbnail${image.path}`}
                    alt="imagesample"
                    key={image.title}
                  />
                ))}
              </div>
              <div>vendor code :{currentProduct.vendorCode}</div>
              <div>comp :{currentProduct.comp}</div>
              <div>weight :{currentProduct.weight}</div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default WorkClothes;
