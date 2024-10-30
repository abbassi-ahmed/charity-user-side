import { categoriesSection } from "@/data/categories";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
const { text, categoriesIcons } = categoriesSection;
import { SkeletonLoader } from "../skeletonLoader/skeletonLoader";
import Image from "next/image";

const CategoriesBoxItem = ({ categories = [] }) => {
  console.log(categories);
  return (
    <div className="categories-box-item">
      {categories.length > 0 ? (
        categories.map(({ id, icon, title }) => (
          <div key={id} className="item">
            <a href="#">
              <Image src={icon} alt="icon" width={65} height={65} />
              <br />
              <span>{title}</span>
            </a>
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
        "http://localhost:3636/categories-section/find-all"
      );
      setCategoriesSection(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
                  }}
                >
                  {categoriesSection[0]?.description || ""}
                </p>
                {/* <div className="item d-flex align-items-center">
                  <div className="thumb">
                    <Image
                      src={categoriesSection[0]?.categoriesUser || ""}
                      alt=""
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: 50,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p>{categoriesSection[0]?.signature || ""}</p>
                </div> */}
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
