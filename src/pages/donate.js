import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import DonationSimple from "@/components/free-donation/donate-now";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useEffect, useState } from "react";

export default function Page() {
  return (
    <Layout>
      <Header />
      <PageTitle title="Don" page="Don" />
      <DonationSimple />
    </Layout>
  );
}
