import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const TestimonialsBox = ({ testimonial = {} }) => {
  const { name, text, image } = testimonial;
  return (
    <div className="testimonials-box mt-30 " style={{ minHeight: "450px" }}>
      <Row>
        <Col lg={7}>
          <div className="testimonials-content">
            <h4 className="title">{name}</h4>
            <p
              className="mb-5"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
            >
              {text}
            </p>
          </div>
        </Col>
        <Col lg={5}>
          <div
            className="testimonials-thumb text-right"
            style={{ height: "100%", width: "100%" }}
          >
            <Image
              src={image}
              alt=""
              style={{
                height: "450px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="quote">
              <i className="flaticon-left-quotes-sign"></i>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TestimonialsBox;
