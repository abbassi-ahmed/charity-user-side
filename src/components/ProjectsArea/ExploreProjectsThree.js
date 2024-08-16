import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleExploreProject from "./SingleExploreProject";

const ExploreProjectsThree = ({ projects, projectSums }) => {
  return (
    <section className="explore-projects-3-area explore-v2-page pt-90 pb-120">
      <Container>
        <div className="explore-margin">
          <Row className="justify-content-center">
            {projects.map((project) => (
              <Col lg={6} md={6} sm={9} key={project.id}>
                <SingleExploreProject
                  project={project}
                  projectSums={projectSums}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ExploreProjectsThree;
