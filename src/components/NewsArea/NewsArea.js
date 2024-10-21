import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsArea = ({ className = "", newsTwo = false, newsPage = false }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api.olympiquemnihla.com/blogs/find-all`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className={`news-area ${className}`}>
      <Container>
        {!newsPage && (
          <Row className="justify-content-center">
            <Col lg={6}>
              <Title
                title="Our Blogs"
                tagline="Latest News and Updates"
                className="text-center"
              />
            </Col>
          </Row>
        )}
        <div
          className={newsTwo ? "" : "no-gutters"}
          style={{ display: "flex" }}
        >
          {blogs
            .slice(0, newsPage ? undefined : newsTwo ? 3 : 4)
            .map((blog, index) => (
              <NewsItem
                key={blog.id}
                news={blog}
                index={index}
                newsTwo={newsTwo}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default NewsArea;
