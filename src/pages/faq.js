import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import FaqDesignArea from "@/components/FaqArea/FaqDesignArea";
import FaqTitleArea from "@/components/FaqArea/FaqTitleArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Faq = () => {
  const [faqData, setFaqData] = useState(null);
  const fetchFaqData = async () => {
    try {
      const response = await axios.get(
        "http://194.164.54.216:3636/faq/find-all"
      );
      setFaqData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching faq data:", error);
    }
  };
  useEffect(() => {
    fetchFaqData();
  }, []);
  return (
    <Layout>
      <Header />
      <PageTitle title="FAQs" parent="pages" />
      <FaqDesignArea faqData={faqData} />
      {/* <BrandAreaTwo /> */}
    </Layout>
  );
};

export default Faq;
