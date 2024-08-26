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
import Link from "../components/Reuseable/Link";

const fetchUser = async (token) => {
  const response = await fetch("https://api.olympiquemnihla.com/users/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchSlides = async () => {
  const response = await axios.get(
    "https://api.olympiquemnihla.com/slider-section/find-all"
  );
  return response.data;
};

const fetchTestimonials = async () => {
  const response = await axios.get(
    "https://api.olympiquemnihla.com/testimonials-section/find-all"
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
    <div style={{ position: "relative" }}>
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
        <Link
          style={{
            position: "fixed",
            bottom: "15px",
            left: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            zIndex: 1000,
            width: "110px",
            height: "50px",
            backgroundColor: "#29F0B5",
            color: "#fff",
            cursor: "pointer",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href={"/donate"}
        >
          <p
            style={{
              width: "100%",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Donate Now
          </p>
        </Link>
      </Layout>
    </div>
  );
};

export default Home;
