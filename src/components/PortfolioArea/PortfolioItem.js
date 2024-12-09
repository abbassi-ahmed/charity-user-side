import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";

const PortfolioItem = ({ portfolio = {}, className = "" }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className={`portfolio-item${className}`} onClick={handleOpenModal}>
        <Image
          src={portfolio.image}
          alt=""
          width={400}
          height={370}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="portfolio-overlay">
          <a className="image-popup">
            <i className="flaticon-add"></i>
          </a>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image
            src={portfolio.image}
            alt="Portfolio Image"
            width={400}
            height={370}
            style={{
              objectFit: "cover",
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PortfolioItem;
