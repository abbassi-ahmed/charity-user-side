import { exploreProjects } from "@/data/projectsArea";
import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Reuseable/Title";
import SingleExploreProject from "./SingleExploreProject";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
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

const { tagline, title, projects } = exploreProjects;

const ExploreProjects = () => {
  const [projects, setProjects] = useState([]);
  const [projectSums, setProjectSums] = useState({});
  const hasFetchedProjects = useRef(false); // Ref to track if the data has been fetched

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.olympiquemnihla.com/projects/find-all"
        );
        const projects = response.data;
        setProjects(projects);

        const projectSumsCopy = { ...projectSums };
        await Promise.all(
          projects.map(async (project) => {
            try {
              const response = await axios.get(
                `https://api.olympiquemnihla.com/project-donation/get-sum-of-donations/${project.id}`
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
    <section className="explore-projects-3-area">
      <Container fluid className="p-0">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title title={title} tagline={tagline} className="text-center" />
          </Col>
        </Row>
        <div className="explore-project-2-active">
          <Swiper {...options}>
            <div className="swiper-wrapper">
              {projects.slice(0, 5).map((project) => (
                <SwiperSlide key={project.id}>
                  <SingleExploreProject
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
  );
};

export default ExploreProjects;
