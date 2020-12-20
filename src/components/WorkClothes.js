import React, { useState } from "react";
import Modal from "react-modal";
import colorIcon from "../colorIcon.png";
import camera from "../camera.png";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from "react-intl";
import "./css/WorkClothes.css";
import "./css/ColorCard.css";
import "./css/ImageCard.css";
import WorkClothesList from "./WorkClothesList";

const products = WorkClothesList;

function WorkClothes() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "auto",
      borderRadius: "10px",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.8)",
    },
  };

  Modal.setAppElement("#root");

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
        <div
          className="close-button"
          onClick={() => {
            closeModal();
          }}
        >
          x
        </div>
        {/* COLORS MODAL */}
        {currentProduct.colors ? (
          <div className="color-card">
            <div className="color-holder">
              {currentProduct.colors.map((color) => (
                <div className="actualButton" key={uuidv4()}>
                  <div
                    className="color-button"
                    style={{ background: `${color.hex}` }}
                    onClick={() => {
                      changeCardColor(color);
                    }}
                  ></div>
                  <p>{color.mogotex}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* IMAGES MODAL */}
            <div className="image-card">
              <div className="image-holder">
                {currentProduct.images.map((image) => (
                  <div key={uuidv4()}>
                    <img
                      onClick={() => {
                        setImage(image);
                      }}
                      src={`images/thumbnail${image.path}`}
                      alt="imagesample"
                      key={uuidv4()}
                    />
                    <p>{image.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default WorkClothes;
