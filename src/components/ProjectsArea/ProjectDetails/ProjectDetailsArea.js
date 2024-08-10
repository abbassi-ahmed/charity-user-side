import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../../Reuseable/Link";
import CircularProgressBar from "../../../components/circularProgress/progress";

const ProjectDetailsArea = ({ project, sum }) => {
  const { name, description, target, startDate, targetDate, Status } = project;
  const amount = sum && sum.sum ? sum.sum : 0;
  const progress = (amount / parseInt(target)) * 100;

  return (
    <section className="project-details-area pt-120 pb-190">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="project-details-thumb">
              {/* <Image src={image} alt={name} /> */}
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
              <p>
                {typeof description === "string"
                  ? description
                  : "No description available."}
              </p>
              <div className="project-details-item">
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
                    Donate Now
                  </Link>
                </div>
                <div className="project-btn mt-25">
                  <a className="main-btn" href="#">
                    Back this project
                  </a>
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
