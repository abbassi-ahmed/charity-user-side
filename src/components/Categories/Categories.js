import { categoriesSection } from "@/data/categories";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
const { text, categoriesIcons } = categoriesSection;
import { SkeletonLoader } from "../skeletonLoader/skeletonLoader";
import Image from "next/image";
import Link from "../Reuseable/Link";

const CategoriesBoxItem = ({ categories = [] }) => {
  return (
    <div className="categories-box-item">
      {categories.length > 0 ? (
        categories.map(({ id, icon, title }) => (
          <div key={id} className="item">
            <Link href="about">
              <Image src={icon} alt="icon" width={65} height={65} />
              <br />
              <span>{title}</span>
            </Link>
          </div>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};

const Categories = () => {
  const [categoriesSection, setCategoriesSection] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.olympiquemnihla.com/categories-section/find-all"
      );
      setCategoriesSection(res.data);
      console.log("Categories fetched successfully:", res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (!categoriesSection || categoriesSection.length === 0) {
    return null;
  }
  return (
    <section
      className="categories-area bg_cover"
      style={{
        backgroundImage: `url(${
          categoriesSection && categoriesSection[0]?.bg
        })`,
      }}
    >
      <Container>
        {loading ? (
          <SkeletonLoader />
        ) : categoriesSection ? (
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="categories-content">
                <span>{categoriesSection[0]?.tagline || ""}</span>
                <h3 className="title">{categoriesSection[0]?.title || ""}</h3>
                <p
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    textAlign: "justify",
                  }}
                >
                  {categoriesSection[0]?.description || ""}
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="categories-box">
                <CategoriesBoxItem categories={categoriesIcons.slice(0, 3)} />
                <CategoriesBoxItem categories={categoriesIcons.slice(3)} />
              </div>
            </Col>
          </Row>
        ) : (
          <p>No categories section available</p>
        )}
      </Container>
    </section>
  );
};

export default Categories;
