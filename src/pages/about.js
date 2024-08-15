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
import React, { useEffect, useState } from "react";

const About = () => {
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
    <Layout>
      <Header />
      <PageTitle title="About" parent="pages" />
      <AboutIntroduction />
      <FunFacts className="fun-facts-about-area" />
      <NextBigThing className="next-big-thing-about-area" />
      <TeamMainArea className="about-team-main-area" />
      <TogetherArea className="together-3-area" />
      <TestimonialsArea testimonials={testimonials} />
      <BrandAreaTwo />
    </Layout>
  );
};

export default About;
