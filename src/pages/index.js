import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Categories from "@/components/Categories/Categories";
import CtaArea from "@/components/CtaArea/CtaArea";
import FunFacts from "@/components/FunFacts/FunFacts";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import ProjectsArea from "@/components/ProjectsArea/ProjectsArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import TestimonialsArea from "@/components/Testimonials/TestimonialsArea";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

const fetchUser = async (token) => {
  const response = await fetch("http://194.164.54.216:3636/users/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchSlides = async () => {
  const response = await axios.get(
    "http://194.164.54.216:3636/slider-section/find-all"
  );
  return response.data;
};

const fetchTestimonials = async () => {
  const response = await axios.get(
    "http://194.164.54.216:3636/testimonials-section/find-all"
  );
  return response.data;
};

const Home = () => {
  const [token, setToken] = useState(null);
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user", token],
    queryFn: () => fetchUser(token),
    enabled: !!token,
    initialData: null,
  });

  const { data: slides, isLoading: isSlidesLoading } = useQuery({
    queryKey: ["slides"],
    queryFn: fetchSlides,
    initialData: [],
  });

  const { data: testimonials, isLoading: isTestimonialsLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    initialData: [],
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  if (isUserLoading || isSlidesLoading || isTestimonialsLoading) {
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

  if (userError) {
    localStorage.removeItem("token");
    return (
      <Layout>
        <Header />
        <NewsArea />
      </Layout>
    );
  }

  return (
    <div>
      <Layout>
        <Header />
        <BannerSlider slides={slides} />
        <Categories />
        <CtaArea />
        {/* <ProjectsArea /> */}
        <WhyChoose />
        <FunFacts />
        <TogetherArea />
        <TestimonialsArea testimonials={testimonials} />
        <NewsArea />
      </Layout>
    </div>
  );
};

export default Home;
