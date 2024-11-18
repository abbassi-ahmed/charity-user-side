import AboutIntroduction from "@/components/AboutArea/AboutIntroduction";
import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import FunFacts from "@/components/FunFacts/FunFacts";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NextBigThing from "@/components/NextBigThing/NextBigThing";
import PageTitle from "@/components/Reuseable/PageTitle";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import TestimonialsArea from "@/components/Testimonials/TestimonialsArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import TeamHome from "./team-home";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await axios.get("http://localhost:3636/derigant/find-all");
  return response.data;
};

const About = () => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3636/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.firstName) {
            setUser(data);
          } else {
            localStorage.removeItem("token");
            router.push("/sign-in");
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          localStorage.removeItem("token");
          router.push("/sign-in");
        })
        .finally(() => {
          setLoader(false);
        });
    } else {
      setLoader(false);
    }
  }, [router]);

  const { data: users, isLoading: isUsersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialData: [],
  });

  if (loader || isUsersLoading) {
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
      <NextBigThing className="next-big-thing-about-area" />
      {users && users.length > 0 && <TeamHome users={users.slice(0, 3)} />}
      <TogetherArea className="together-3-area" />
      <BrandAreaTwo className="brand-area-2" />
    </Layout>
  );
};

export default About;
