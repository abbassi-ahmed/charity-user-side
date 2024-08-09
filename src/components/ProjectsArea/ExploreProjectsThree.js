import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleExploreProject from "./SingleExploreProject";
import axios from "axios";

const ExploreProjectsThree = () => {
  const [projects, setProjects] = useState([]);
  const [projectSums, setProjectSums] = useState({});
  const hasFetchedProjects = useRef(false); // Ref to track if the data has been fetched

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://194.164.54.216:3636/projects/find-all"
        );
        const projects = response.data;
        setProjects(projects);

        const projectSumsCopy = { ...projectSums };
        await Promise.all(
          projects.map(async (project) => {
            try {
              const response = await axios.get(
                `http://194.164.54.216:3636/project-donation/get-sum-of-donations/${project.id}`
              );
              projectSumsCopy[project.id] = response.data.sum;
            } catch (error) {
              console.error(
                `Error fetching sum of donations for project ${project.id}:`,
                error
              );
            }
          })
        );

        setProjectSums(projectSumsCopy);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    if (!hasFetchedProjects.current) {
      fetchProjects();
      hasFetchedProjects.current = true;
    }
  }, [projectSums]);

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
