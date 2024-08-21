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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) {
          return;
        }
        await axios
          .get(`https://api.olympiquemnihla.com/blogs/find-one/${id}`)
          .then(async (response) => {
            setBlog(response.data);
            await axios
              .get("https://api.olympiquemnihla.com/blogs/find-all")
              .then((res) => {
                const uniquePosts = res.data.filter(
                  (post) => post.id !== blog?.id
                );
                setPosts(uniquePosts);
              });
          });
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchBlog();
  }, [id, blog?.id]);

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
            <BlogDetailsSidebar posts={posts} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
