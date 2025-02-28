import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Title from "../Reuseable/Title";
import SingleProject from "./SingleProject";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const ProjectsArea = ({ className = "" }) => {
  const [projects, setProjects] = useState([]);
  const [tagline, setTagline] = useState("Voir les projets");
  const [title, setTitle] = useState("Projets à la une");
  const [projectSums, setProjectSums] = useState({});
  const hasFetchedProjects = useRef(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.olympiquemnihla.com/projects/find-not-ended"
        );
        const fetchedProjects = response.data;

        const projectSumsPromises = fetchedProjects.map(async (project) => {
          try {
            const donationResponse = await axios.get(
              `https://api.olympiquemnihla.com/project-donation/get-sum-of-donations/${project.id}`
            );
            return { projectId: project.id, sum: donationResponse.data.sum };
          } catch (error) {
            console.error(
              `Error fetching sum of donations for project ${project.id}:`,
              error
            );
            return { projectId: project.id, sum: 0 };
          }
        });

        const projectSumsResults = await Promise.all(projectSumsPromises);
        const projectSumsMap = projectSumsResults.reduce(
          (acc, { projectId, sum }) => {
            acc[projectId] = sum;
            return acc;
          },
          {}
        );

        setProjects(fetchedProjects);
        setProjectSums(projectSumsMap);
      } catch (error) {
        console.error("Error fetching the projects", error);
      }
    };

    fetchProjects();
  }, []);

  if (projects.length === 0 || !projects || !Array.isArray(projects))
    return null;
  return (
    <div>
      <section className={`explore-projects-area ${className}`}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Title tagline={tagline} title={title} className="text-center" />
            </Col>
          </Row>
          <div className="explore-project-active">
            <Swiper {...options}>
              <div className="swiper-wrapper">
                {projects.slice(0, 4).map((project) => (
                  <SwiperSlide key={project.id}>
                    <SingleProject
                      project={project}
                      projectSums={projectSums}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProjectsArea;
