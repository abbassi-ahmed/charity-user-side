import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import BlogAuthor from "./BlogAuthor";
import BlogDetailsMain from "./BlogDetailsMain";
import BlogDetailsSidebar from "./BlogDetailsSidebar";
import axios from "axios";

const BlogDetails = ({ id }) => {
  // const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) {
          return;
        }
        const response = await axios.get(
          `http://194.164.54.216:3636/blogs/find-one/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <section className="blog-details">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <BlogDetailsMain blog={blog} />
            {/* <BlogAuthor author={blog.admin} /> */}
          </Col>
          <Col lg={4} md={6} sm={7}>
            <BlogDetailsSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
