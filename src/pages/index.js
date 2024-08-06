import BannerSlider from "@/components/BannerSlider/BannerSlider";
import BrandArea from "@/components/BrandArea/BrandArea";
import Categories from "@/components/Categories/Categories";
import CtaArea from "@/components/CtaArea/CtaArea";
import FunFacts from "@/components/FunFacts/FunFacts";
import GuideArea from "@/components/GuideArea/GuideArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import ProjectsArea from "@/components/ProjectsArea/ProjectsArea";
import TeamArea from "@/components/TeamArea/TeamArea";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import TestimonialsArea from "@/components/Testimonials/TestimonialsArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
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
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <div>
      <Layout>
        <Header />
        {user ? (
          <div>
            <BannerSlider />
            <Categories />
            <CtaArea />
            <ProjectsArea />
            <WhyChoose />
            <FunFacts />
            <TogetherArea />
            <BrandArea />
            <TestimonialsArea />
            {/* <TeamArea /> */}
            {/* <TeamMainArea /> */}
            <NewsArea />
            {/* <GuideArea /> */}
          </div>
        ) : (
          <div>
            <NewsArea />
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Home;
