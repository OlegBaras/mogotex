import React, { useState } from "react";
import Modal from "react-modal";
import colorIcon from "../colorIcon.png";
import camera from "../camera.png";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from "react-intl";
import "./css/TableCloths.css";
import "./css/ColorCard.css";
import "./css/ImageCard.css";

function TableCloths() {
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
      vendorCode: "04c47",
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
          <span>192 </span>
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
        { hex: "#F0EDE2", mogotex: "110701" },
        { hex: "#F5ECD0", mogotex: "110510" },
        { hex: "#F4ECC2", mogotex: "110617" },
        { hex: "#FDD19C", mogotex: "050305" },
        { hex: "#E3BC8E", mogotex: "050303" },
        { hex: "#C86656", mogotex: "090605" },
        { hex: "#12674A", mogotex: "361003" },
        { hex: "#363756", mogotex: "251003" },
      ],
    },
    {
      id: 2,
      vendorCode: "06c26",
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
          <span>224 </span>
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
      images: [
        { path: "/06c26-1589-010101.png", title: "1589/010101" },
        { path: "/06c26-1625-050303.png", title: "1625/050303" },
        { path: "/06c26-1666-010101.png", title: "1666/010101" },
        { path: "/06c26-1666-040403-440604.png", title: "1666/040403/440604" },
        { path: "/06c26-1812-010101.png", title: "1812/010101" },
        { path: "/06c26-1891.png", title: "1891" },
        { path: "/06c26-2015.png", title: "2015" },
      ],
    },
    {
      id: 3,
      vendorCode: "08c6",
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
          <span>238 </span>
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
        { hex: "#F0EDE2", mogotex: "110701" },
        { hex: "#F5ECD0", mogotex: "110510" },
        { hex: "#E4C49D", mogotex: "14-1119" },
        { hex: "#5C4939", mogotex: "191020" },
        { hex: "#9E1030", mogotex: "191862" },
        { hex: "#C9D3DC", mogotex: "260402" },
      ],
    },

    {
      id: 4,
      vendorCode: "08c6",
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
          <span>238 </span>
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
      images: [
        { path: "/08c6-191862.png", title: "191862" },
        { path: "/08c6-010101.png", title: "010101" },
        { path: "/08c6-110701.png", title: "110701" },
        { path: "/08c6-14-1119.png", title: "14-1119" },
        { path: "/08c6-191020.png", title: "191020" },
        { path: "/08c6-260402.png", title: "260402" },
        { path: "/08c6-110501.png", title: "110501" },
      ],
    },

    {
      id: 5,
      vendorCode: "13c5",
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
          <span>200 </span>
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
      images: [
        { path: "/13c5-1835.png", title: "1835" },
        { path: "/13c5-2097.png", title: "2097" },
        { path: "/13c5-2112.png", title: "2112" },
        { path: "/13c5-2115.png", title: "2115" },
        { path: "/13c5-2116.png", title: "2116" },
      ],
    },
  ];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [color, setColor] = useState("");
  const [image, setImage] = useState();

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
    <div className="table-cloths">
      <div className="title">
        <FormattedMessage id="tableCloths" />
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

export default TableCloths;
