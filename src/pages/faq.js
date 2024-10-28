import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import FaqDesignArea from "@/components/FaqArea/FaqDesignArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [current, setCurrent] = useState("pills-1");

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3636/faq/find-by-type",
          {
            type:
              current === "pills-1"
                ? "General"
                : current === "pills-2"
                ? "Privacy"
                : "Support",
          }
        );
        setFaqData(response.data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };
    fetchFaqData();
  }, [current]);

  return (
    <Layout>
      <Header />
      <PageTitle title="FAQs" parent="pages" />
      <FaqDesignArea
        faqData={faqData}
        current={current}
        setCurrent={setCurrent}
      />
      {/* <BrandAreaTwo /> */}
    </Layout>
  );
};

export default Faq;
