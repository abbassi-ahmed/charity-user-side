import AboutIntroduction from "@/components/AboutArea/AboutIntroduction";
import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import FunFacts from "@/components/FunFacts/FunFacts";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import React from "react";
import TeamHome from "./team-home";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await axios.get(
    "https://api.olympiquemnihla.com/derigant/find-all"
  );
  return response.data;
};

const fetchInformation = async () => {
  const response = await axios.get(
    "https://api.olympiquemnihla.com/together-area/find-all"
  );
  return response.data;
};
const About = () => {
  const { data: users, isLoading: isUsersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialData: [],
  });
  const { data: information, isLoading: isInformationLoading } = useQuery({
    queryKey: ["information"],
    queryFn: fetchInformation,
    initialData: [],
  });

  if (isUsersLoading || isInformationLoading) {
    return (
      <Layout>
        <Header />

        <PageTitle title="A Propos" parent="Page" />

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
      <PageTitle title="A Propos" parent="Page" />
      <AboutIntroduction />
      <FunFacts className="fun-facts-about-area" />
      {users && users.length > 0 && <TeamHome users={users.slice(0, 3)} />}
      {information && information.length > 0 && (
        <TogetherArea information={information} />
      )}
      <BrandAreaTwo className="brand-area-2" />
    </Layout>
  );
};

export default About;
