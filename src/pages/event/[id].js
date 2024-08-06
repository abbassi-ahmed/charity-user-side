import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";
import { useRouter } from "next/router";
import EventDetails from "@/components/EventArea/EventDetails";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Header />
      <PageTitle title="News" />
      <EventDetails id={id} />
    </Layout>
  );
}
