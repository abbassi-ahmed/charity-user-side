import { useState } from "react";
import { Image, Modal, Badge } from "react-bootstrap";

const PortfolioItem = ({ portfolio = {} }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="portfolio-item" onClick={handleOpenModal}>
        <div className="portfolio-image-container">
          <Image
            src={portfolio.image || "/placeholder.svg"}
            alt={portfolio.title || "Gallery Image"}
            className="portfolio-image"
          />
          <div className="portfolio-overlay">
            <div className="overlay-icon">
              <i className="flaticon-add"></i>
            </div>
          </div>
        </div>
        {portfolio.title && (
          <div className="portfolio-info">
            <h5 className="portfolio-title">{portfolio.title}</h5>
            {portfolio.tags && portfolio.tags.length > 0 && (
              <div className="portfolio-tags">
                {portfolio.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} bg="secondary" className="portfolio-tag">
                    {tag}
                  </Badge>
                ))}
                {portfolio.tags.length > 3 && (
                  <Badge bg="light" text="dark" className="portfolio-tag">
                    +{portfolio.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="custom-modal"
      >
        <Image
          src={portfolio.image || "/placeholder.svg"}
          alt={portfolio.title || "Gallery Image"}
        />
        {portfolio.tags && portfolio.tags.length > 0 && (
          <div className="modal-tags">
            {portfolio.tags.map((tag, index) => (
              <Badge key={index} bg="secondary" className="modal-tag">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
};

export default PortfolioItem;
