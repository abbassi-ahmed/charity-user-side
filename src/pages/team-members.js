import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import noData from "../assets/svgs/noData.svg";
import Image from "next/image";

const TeamMembers = () => {
  const router = useRouter();

  const { data: user, isLoading: loadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch("http://localhost:3636/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        throw new Error("Failed to verify token");
      }
      return response.json();
    },
    onError: () => {
      localStorage.removeItem("token");
      router.push("/sign-in");
    },
    retry: false, // Prevent retrying if the token verification fails
  });

  // Fetch the users data
  const { data: users, isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:3636/derigant/find-all"
      );
      return response.data;
    },
    enabled: !loadingUser && user !== null,
  });

  if (loadingUser || loadingUsers) {
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
      {users.length === 0 ? (
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

export default TeamMembers;
