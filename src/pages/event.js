import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import EventsPage from "@/components/EventArea/EventPage";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const event = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Events" parent="pages" />
      <EventsPage />
    </Layout>
  );
};

export default event;
