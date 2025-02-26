import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";
import noData from "../../assets/svgs/noData.svg";
import Image from "next/image";
import axios from "axios";

const GalleryPage = () => {
  const [loader, setLoader] = useState(true);
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    setLoader(true);
    try {
      const response = await axios.get(
        "https://api.olympiquemnihla.com/gallerie/find-all"
      );
      setImages(response.data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loader) {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "50vh", width: "100%" }}
      >
        <h1>Chargement...</h1>
      </div>
    );
  }

  if (!images.length) {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "50vh", width: "100%" }}
      >
        <Image src={noData} alt="No Data Found" width={200} height={200} />
        <h1>Aucun Image trouvé</h1>
      </div>
    );
  }
  return (
    <div className="gallery-page-area">
      <Container>
        <Row>
          {images.map((portfolio) => (
            <Col key={portfolio.id} lg={4} md={6} sm={6}>
              <PortfolioItem portfolio={portfolio} className=" mt-30" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryPage;
