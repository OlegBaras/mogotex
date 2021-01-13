import React, { useState } from "react";
import Modal from "react-modal";
import { FormattedMessage } from "react-intl";
import { v4 as uuidv4 } from "uuid";
import colorIcon from "../colorIcon.png";
import camera from "../camera.png";
import CloseButton from "../components/icons/close.svg";
import "../components/css/ProductTable.css";
import "../components/css/ColorCard.css";
import "../components/css/ImageCard.css";

export default function ProductTable({ products, type }) {
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
  const isFilter = type === "Filtering";

  const openModal = (product) => {
    setCurrentProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="workclothes">
      <div className="title">
        <FormattedMessage id={type} />
      </div>

      <div>
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
              <th>{isFilter ? null : <FormattedMessage id="Colors" />}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                className="trRow"
                onClick={() => (!isFilter ? openModal(product) : undefined)}
                key={uuidv4()}
              >
                <td>{product.vendorCode}</td>
                <td>{product.comp}</td>
                <td>{product.weight}</td>
                <td>
                  {product.colors ? (
                    <img alt="icon" src={colorIcon} />
                  ) : product.images ? (
                    <img alt="icon" src={camera} />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        className="active-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Work Clothes Modal"
        currentProduct={currentProduct}
      >
        <span
          className="close-button"
          onClick={() => {
            closeModal();
          }}
        >
          <img src={CloseButton} alt="close modal" />
        </span>

        {/* COLORS MODAL */}
        {currentProduct.colors ? (
          <div className="color-card">
            <div className="color-holder">
              {currentProduct.colors.map((color) => (
                <div className="actualButton" key={uuidv4()}>
                  <div
                    className="color-button"
                    style={{ background: `${color.hex}` }}
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
                {currentProduct.images &&
                  currentProduct.images.map((image) => (
                    <div key={uuidv4()}>
                      <img
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
