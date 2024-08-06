import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Profile from "@/components/Profile/Profile";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const News = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Profile" />
      <Profile />
    </Layout>
  );
};

export default News;
