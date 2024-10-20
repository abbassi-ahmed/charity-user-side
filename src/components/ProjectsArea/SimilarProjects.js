import { similarProjects } from "@/data/projectsArea";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleProject from "./SingleProject";
import axios from "axios";

const { tagline, title } = similarProjects;

const SimilarProjects = ({ projects }) => {
  const [projectSums, setProjectSums] = useState({});

  useEffect(() => {
    const fetchProjectSums = async () => {
      const newProjectSums = {}; // Create a new object
      await Promise.all(
        projects.map(async (project) => {
          try {
            const response = await axios.get(
              `http://localhost:3636/project-donation/get-sum-of-donations/${project.id}`
            );
            newProjectSums[project.id] = response.data.sum;
          } catch (error) {
            console.error(
              `Error fetching sum of donations for project ${project.id}:`,
              error
            );
          }
        })
      );
      setProjectSums(newProjectSums); // Set the new object as state
    };

    fetchProjectSums();
  }, [projects]);

  return (
    <section className="explore-projects-area explore-projects-page-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title title={title} tagline={tagline} className="text-center" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {projects.length > 0 &&
            projects.map((project) => (
              <Col lg={4} md={6} sm={9} key={project.id}>
                <SingleProject project={project} projectSums={projectSums} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default SimilarProjects;
