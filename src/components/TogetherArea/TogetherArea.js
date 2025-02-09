import { togetherArea } from "@/data/togetherArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg } = togetherArea;

const TogetherArea = ({ information }) => {
  return (
    <section
      className={`together-area bg_cover`}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="together-content text-center">
              <span>{information[0].tagline}</span>
              <h3 className="title">{information[0].title}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TogetherArea;
