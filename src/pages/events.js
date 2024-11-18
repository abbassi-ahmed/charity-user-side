import React from "react";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import EventsPage from "@/components/EventArea/EventPage";
import PageTitle from "@/components/Reuseable/PageTitle";

export default function Events() {
  return (
    <Layout>
      <Header />
      <PageTitle title="Evénement" parent="pages" />
      <EventsPage />
    </Layout>
  );
}
