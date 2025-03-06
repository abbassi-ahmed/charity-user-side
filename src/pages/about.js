import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/Reuseable/PageTitle";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";

const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://api.olympiquemnihla.com/derigant/find-all"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

const About = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <Layout>
        <Header />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", width: "100%" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !users || users.length === 0) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Membres de l'équipe" />
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ height: "50vh", width: "100%" }}
        >
          <p className="text-muted fs-5">
            Aucun membre de l&apos;équipe disponible
          </p>
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
