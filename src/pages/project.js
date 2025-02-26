import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import EventsPage from "@/components/EventArea/EventPage";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";
import ProjectPage from "@/components/EventArea/ProjectPage";

const event = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Projets" parent="pages" />
      <ProjectPage />
    </Layout>
  );
};

export default event;
