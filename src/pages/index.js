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
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState(null);
  const [slides, setSlides] = useState([]);
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
        .then(async (data) => {
          if (data && data.firstName) {
            setUser(data);
            const response = await axios.get(
              "http://localhost:3636/slider-section/find-all"
            );
            setSlides(response.data);
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
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3636/testimonials-section/find-all"
        );
        setTestimonials(response.data);
        console.log("Testimonials fetched:", response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div>
      <Layout>
        <Header />
        {user ? (
          <div>
            <BannerSlider slides={slides} />
            <Categories />
            <CtaArea />
            <ProjectsArea />
            <WhyChoose />
            <FunFacts />
            <TogetherArea />
            {/* <BrandArea /> */}
            <TestimonialsArea testimonials={testimonials} />
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
