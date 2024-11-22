import ContactFormArea from "@/components/ContactArea/ContactFormArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import { useRouter } from "next/router";
import React from "react";

const Contact = () => {
  const router = useRouter();
  const { contact } = router.query;

  const email = Array.isArray(contact) ? contact[0] : contact || "";

  return (
    <Layout>
      <Header />
      <PageTitle title="Contact" />
      <ContactFormArea email={email} />
    </Layout>
  );
};

export default Contact;
