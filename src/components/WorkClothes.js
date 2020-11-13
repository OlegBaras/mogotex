import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
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
  ];

  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const openModal = (product) => {
    setIsOpen(true);
    setCurrentProduct(product);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "green";
    console.log(currentProduct.id);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      </Modal>
    </div>
  );
}

export default WorkClothes;
