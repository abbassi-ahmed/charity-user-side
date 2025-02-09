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
import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";

import TogetherArea from "@/components/TogetherArea/TogetherArea";
import TeamHome from "./team-home";
import Link from "@/components/Reuseable/Link";

const fetchUser = async (token) => {
  const response = await fetch("http://localhost:3636/users/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchSlides = async () => {
  const response = await axios.get(
    "http://localhost:3636/slider-section/find-all"
  );
  return response.data;
};
const fetchUsers = async () => {
  const response = await axios.get("http://localhost:3636/derigant/find-all");
  return response.data;
};

const fetchInformation = async () => {
  const response = await axios.get(
    "http://localhost:3636/together-area/find-all"
  );
  return response.data;
};

const Home = () => {
  const [token, setToken] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  if (
    isUserLoading ||
    isSlidesLoading ||
    isInformationLoading ||
    isUsersLoading ||
    !slides ||
    !information ||
    !users
  ) {
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
        {/* <WhyChoose /> */}
        <CtaArea />
        <ProjectsArea />
        <FunFacts />

        {information && information.length > 0 && (
          <TogetherArea information={information} />
        )}
        {users && users.length > 0 && <TeamHome users={users.slice(0, 3)} />}
        <NewsArea />
        <BrandAreaTwo />

        {slides && slides.length > 0 && (
          <Link
            style={{
              position: "fixed",
              top: isScrolled ? "unset" : "75%",
              left: isScrolled ? "10px" : "50%",
              bottom: isScrolled ? "18px" : "unset",
              transform: isScrolled ? "none" : "translate(-50%, -50%)",
              zIndex: 9999,
              transition: "all 0.8s ease",
            }}
            href={"/donate"}
            className="main-btn"
          >
            Faire Un Don
          </Link>
        )}
      </Layout>
    </div>
  );
};

export default Home;
