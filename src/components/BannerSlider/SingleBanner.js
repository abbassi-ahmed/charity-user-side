import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSwiperSlide } from "swiper/react";
import Link from "../Reuseable/Link";

const SingleBanner = ({
  singleSlide = {},
  isBannerTwo = false,
  isBannerThree = false,
}) => {
  const { isActive } = useSwiperSlide();

  const { bg, text, title, banner, banner1, banner2 } = singleSlide;

  return (
    <div
      className={`banner-area bg_cover d-flex ${
        isBannerThree ? "banner-3-area align-items-end" : "align-items-center"
      }`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row
          className={
            isBannerTwo || isBannerThree
              ? "justify-content-start"
              : "justify-content-center"
          }
        >
          <Col lg={8}>
            <div
              className={`banner-content${
                !isBannerTwo && !isBannerThree ? " text-center" : ""
              }`}
            >
              {!isBannerTwo && !isBannerThree && <br />}
              {!isBannerTwo && !isBannerThree && (
                <span className={isActive ? " animated fadeInLeft" : ""}>
                  {text}
                </span>
              )}
              <h3
                className={`title${isActive ? " animated fadeInRightBig" : ""}`}
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {title}
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
      {!isBannerTwo && !isBannerThree && (
        <div
          className={`banner-line${isActive ? " animated fadeInRightBig" : ""}`}
        >
          <Image src={banner} alt="" />
        </div>
      )}
      {isBannerTwo && (
        <div>
          <div className="banner-color-shadow">
            <Image src={banner} alt="" />
          </div>
          <div className="banner-line">
            <Image src={banner1} alt="" />
          </div>
          <div className="banner-line-2">
            <Image src={banner2} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBanner;
