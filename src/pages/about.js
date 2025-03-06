import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import Image from "next/image";
import noData from "../assets/svgs/noData.svg";
const About = () => {
  const { data: users, isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.olympiquemnihla.com/derigant/find-all"
      );
      return response.data;
    },
  });

  if (loadingUsers) {
    return (
      <Layout>
        <Header />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", width: "100%" }}
        >
          <div className="pageLoader"></div>
        </div>
      </Layout>
    );
  }

  if (!users || users.length === 0) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Membres de l'équipe" />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", width: "100%" }}
        >
          <p>Aucun membre de l&apos;équipe disponible</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Membres de l'équipe" />
      <TeamMainArea
        className="about-team-main-area team-page-area"
        count={users.length}
        users={users}
      />
    </Layout>
  );
};

export default About;
