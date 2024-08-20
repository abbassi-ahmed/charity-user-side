import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";
import axios from "axios";

const AboutIntroduction = () => {
  const [aboutData, setAboutData] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fetchAboutData = async () => {
    try {
      const response = await axios.get(
        "http://194.164.54.216:3636/about-section/find-all"
      );
      setAboutData(response.data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="about-introduction-area pt-120 pb-120">
      <Container>
        {aboutData && aboutData[0].id ? (
          <Row>
            <Col lg={5}>
              {imageLoaded ? (
                <div className="about-introduction-content">
                  <span>{aboutData[0]?.tagline}</span>
                  <h3 className="title">{aboutData[0]?.title}</h3>
                  <p>{aboutData[0]?.text}</p>
                  <div className="item mt-35">
                    <i className="flaticon-checkmark"></i>
                    <h4 className="title">{aboutData[0]?.item1}</h4>
                  </div>
                  <div className="item mt-35">
                    <i className="flaticon-checkmark"></i>
                    <h4 className="title">{aboutData[0]?.item2}</h4>
                  </div>
                </div>
              ) : (
                <div className="about-introduction-content">
                  <span>Loading...</span>
                  <h3 className="title">Loading...</h3>
                  <p>Loading...</p>
                  <div className="item mt-35">
                    <i className="flaticon-checkmark"></i>
                    <h4 className="title">Loading...</h4>
                  </div>
                  <div className="item mt-35">
                    <i className="flaticon-checkmark"></i>
                    <h4 className="title">Loading...</h4>
                  </div>
                </div>
              )}
            </Col>
            <Col lg={7}>
              <div className="about-introduction-thumb">
                {!imageLoaded && <div className="pageLoader"></div>}
                <Image
                  src={aboutData[0]?.thumb}
                  alt=""
                  style={{ display: imageLoaded ? "block" : "none" }}
                  onLoad={handleImageLoad}
                />
                {imageLoaded && (
                  <div className="about-introduction-customers">
                    <h3 className="title odometer">
                      <VisibilityCountUp count={aboutData[0]?.count} />
                    </h3>
                    <br />
                    <span>{aboutData[0]?.bottomText}</span>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3>Loading...</h3>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default AboutIntroduction;
