import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ExploreProjectsThree from "@/components/ProjectsArea/ExploreProjectsThree";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Projects2 = () => {
  const [projects, setProjects] = useState([]);
  const [projectSums, setProjectSums] = useState({});
  const [loading, setLoading] = useState(true);
  const hasFetchedProjects = useRef(false);

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
      } finally {
        setLoading(false);
      }
    };

    if (!hasFetchedProjects.current) {
      fetchProjects();
      hasFetchedProjects.current = true;
    }
  }, [projectSums]);

  if (loading) {
    return (
      <Layout>
        <Header />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", width: "100%" }}
        >
          <div className="pageLoader"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Explore" />
      <ExploreProjectsThree projects={projects} projectSums={projectSums} />
    </Layout>
  );
};

export default Projects2;
