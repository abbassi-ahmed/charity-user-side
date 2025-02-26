import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ExploreProjectsThree from "@/components/ProjectsArea/ExploreProjectsThree";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import noData from "../assets/svgs/noData.svg";

const ProjectType1 = () => {
  const [projects, setProjects] = useState([]);
  const [projectSums, setProjectSums] = useState({});
  const [loading, setLoading] = useState(true);
  const hasFetchedProjects = useRef(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.post(
          "https://api.olympiquemnihla.com/projects/find-by-type",
          {
            type: "Projet participatif",
          }
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
  if (!projects.length) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Projet participatif" />

        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ height: "50vh", width: "100%" }}
        >
          <Image src={noData} alt="No Data Found" width={200} height={200} />
          <h1>Aucun projet trouvé</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Projet participatif" />

      <ExploreProjectsThree projects={projects} projectSums={projectSums} />
    </Layout>
  );
};

export default ProjectType1;
