import React, { useState } from "react";
import Modal from "react-modal";
import colorIcon from "../colorIcon.png";
import camera from "../camera.png";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from "react-intl";
import "./css/WorkClothes.css";
import "./css/ColorCard.css";
import "./css/ImageCard.css";

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
        { hex: "#718ef9", mogotex: "270605" },
        { hex: "#81BBA1", mogotex: "380603" },
        { hex: "#7CB7A3", mogotex: "360704" },
        { hex: "#4D826C", mogotex: "380803" },
      ],
    },
    {
      id: 2,
      vendorCode: "4c5",
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>51/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>49</span>
        </span>
      ),
      weight: (
        <span>
          <span>210 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
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
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>33/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>67</span>
        </span>
      ),
      weight: (
        <span>
          <span>248 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
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
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>76/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>24</span>
        </span>
      ),
      weight: (
        <span>
          <span>254 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
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
      vendorCode: "09c6 rip-stop",
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>50/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>50</span>
        </span>
      ),
      weight: (
        <span>
          <span>224 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
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
      comp: (
        <span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>100</span>
        </span>
      ),
      weight: (
        <span>
          <span>141 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
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
      comp: (
        <span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>100</span>
        </span>
      ),
      weight: (
        <span>
          <span>133 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
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
      vendorCode: "8tc15",
      comp: (
        <span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>100</span>
        </span>
      ),
      weight: (
        <span>
          <span>133 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      images: [
        { path: "/8tc15-3.png" },
        { path: "/8tc15-1.png" },
        { path: "/8tc15-2.png" },
        // { path: "/8tc15-4.png" },
        { path: "/8tc15-5.png" },
      ],
    },
    {
      id: 9,
      vendorCode: "4c5+KMF",
      comp: (
        <span>
          <span>
            <FormattedMessage id="cot" />
          </span>
          <span>51/</span>
          <span>
            <FormattedMessage id="pes" />
          </span>
          <span>49</span>
        </span>
      ),
      weight: (
        <span>
          <span>210 </span>
          <span>
            <FormattedMessage id="g/m²" />
          </span>
        </span>
      ),
      images: [
        { path: "/3679-1.png", title: "3679-1" },
        { path: "/3724-7.png", title: "3724-7" },
        { path: "/3724-9.png", title: "3724-9" },
        { path: "/4099-10.png", title: "4099-10" },
        { path: "/4368-4.png", title: "4368-4" },
        { path: "/4588-1.png", title: "4588-1" },
        { path: "/4006-17.png", title: "4006-17" },
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
          // IMAGES MODAL
          <div>
            {/* Image Gallery */}
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
