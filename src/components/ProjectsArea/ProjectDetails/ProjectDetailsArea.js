import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../../Reuseable/Link";
import CircularProgressBar from "../../../components/circularProgress/progress";

const ProjectDetailsArea = ({ project, sum }) => {
  const {
    name,
    image,
    shortDescription,
    longDescription,
    target,
    startDate,
    targetDate,
    Status,
  } = project;
  const [imageLoad, setImageLoad] = useState(false);

  const amount = sum && sum.sum ? sum.sum : 0;
  const progress = (amount / parseInt(target)) * 100;
  const handleImageLoad = () => {
    setImageLoad(true);
  };

  return (
    <section className="project-details-area pt-120 pb-50">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="project-details-thumb">
              {!imageLoad && (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "300px", width: "100%" }}
                >
                  <div className="pageLoader"></div>
                </div>
              )}
              <Image
                src={image}
                alt={name}
                width={450}
                height={490}
                onLoad={handleImageLoad}
                style={{ display: imageLoad ? "block" : "none" }}
              />
              <div className="icon">
                <i className="fa fa-heart"></i>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="project-details-content">
              <div className="details-btn">
                <span>
                  {typeof Status === "string" ? Status : "Unknown Status"}
                </span>
              </div>
              <h3 className="title">
                {typeof name === "string" ? name : "Project Name"}
              </h3>
              {/* <p>
                {typeof shortDescription === "string"
                  ? shortDescription
                  : "No description available."}
              </p> */}

              <p>
                {typeof longDescription === "string"
                  ? longDescription
                  : "No description available."}
              </p>

              <div className="project-details-item mt-5">
                <div className="item text-center">
                  <h5 className="title">{target}</h5>
                  <span>Target</span>
                </div>
                <div className="item text-center">
                  <h5 className="title">{amount}</h5>
                  <span>Amount Raised</span>
                </div>

                <div className="item text-center">
                  <h5 className="title">
                    {new Date(startDate).toLocaleDateString()}
                  </h5>
                  <span>Start Date</span>
                </div>
                <div className="item text-center">
                  <h5 className="title">
                    {new Date(targetDate).toLocaleDateString()}
                  </h5>
                  <span>Target Date</span>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-30">
                <div className="project-btn mt-25 mr-15">
                  <Link href={`/donation-project/${project.id}`}>
                    <a className="main-btn" href="#">
                      Faire un don
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsArea;
