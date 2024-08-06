import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import BlogDetails from "@/components/NewsArea/BlogDetails/BlogDetails";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Header />
      <PageTitle title="News" />
      <BlogDetails id={id} />
    </Layout>
  );
}
