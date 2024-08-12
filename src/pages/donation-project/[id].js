import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ProjectDetailsArea from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsArea";
import DonationProject from "@/components/ProjectsArea/ProjectDetails/donationProject";
import SimilarProjects from "@/components/ProjectsArea/SimilarProjects";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3636/projects/find-one/${id}`)
        .then((response) => response.json())
        .then((data) => setProject(data))
        .catch((error) => console.error("Error fetching project:", error));
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Single Project" page="Explore" />
      <DonationProject project={project} />
    </Layout>
  );
}
