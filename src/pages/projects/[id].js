import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ProjectDetailsArea from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsArea";
import ProjectDetailsContent from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsContent";
import SimilarProjects from "@/components/ProjectsArea/SimilarProjects";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [projectSums, setProjectSums] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null); // Reset error state

      const fetchProjectData = async () => {
        try {
          const projectResponse = await fetch(
            `http://localhost:3636/projects/find-one/${id}`
          );
          if (!projectResponse.ok) throw new Error("Failed to fetch project");
          const projectData = await projectResponse.json();
          setProject(projectData);
        } catch (error) {
          setError(error.message);
        }

        try {
          const sumResponse = await fetch(
            `http://localhost:3636/project-donation/get-sum-of-donations/${id}`
          );
          if (!sumResponse.ok)
            throw new Error("Failed to fetch sum of donations");
          const sumData = await sumResponse.json();
          setProjectSums(sumData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProjectData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Replace with a spinner or skeleton
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Single Project" page="Explore" />
      <ProjectDetailsArea project={project} sum={projectSums} />
      <ProjectDetailsContent />
      <SimilarProjects />
    </Layout>
  );
}
