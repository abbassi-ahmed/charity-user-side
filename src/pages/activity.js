import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";
import ActivityPage from "@/components/EventArea/ActivityPage";

const activity = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Activités" parent="pages" />
      <ActivityPage />
    </Layout>
  );
};

export default activity;
