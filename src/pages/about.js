import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import Image from "next/image";

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

  return (
    <Layout>
      <Header />
      <PageTitle title="Membres de l'équipe" />
      {users && users.length === 0 ? (
        <div className="text-center my-4">
          <Image src={noData} alt="No Data Found" width={200} height={200} />
          <h2> Aucun membre pour le moment</h2>
        </div>
      ) : (
        <TeamMainArea
          className="about-team-main-area team-page-area"
          count={users.length}
          users={users}
        />
      )}
    </Layout>
  );
};

export default About;
