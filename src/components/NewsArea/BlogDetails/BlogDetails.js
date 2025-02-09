import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogAuthor from "./BlogAuthor"; // Unused import
import BlogDetailsMain from "./BlogDetailsMain";
import BlogDetailsSidebar from "./BlogDetailsSidebar";
import axios from "axios";

const BlogDetails = ({ id }) => {
  const [blog, setBlog] = useState(null);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const response = await fetch("http://localhost:3636/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) throw new Error("Failed to verify token");
      const data = await response.json();
      if (data && data.firstName) {
        setUser(data);
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      localStorage.removeItem("token");
    }
  };

  const fetchBlog = async () => {
    try {
      if (!id) {
        return;
      }
      const response = await axios.get(
        `http://localhost:3636/blogs/find-one/${id}`
      );
      setBlog(response.data);

      const postsResponse = await axios.get(
        "http://localhost:3636/blogs/find-all"
      );
      const uniquePosts = postsResponse.data.filter(
        (post) => post.id !== response.data.id
      );
      setPosts(uniquePosts);

      const commentsResponse = await axios.get(
        `http://localhost:3636/comments/find-by-blog/${response.data.id}`
      );
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await axios.post(`http://localhost:3636/comments`, {
          userId: user.id,
          blogId: blog.id,
          content: newComment,
        });
        setComments((prevComments) => [...prevComments, response.data]);
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
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
            <BlogDetailsMain
              blog={blog}
              comments={comments}
              user={user}
              newComment={newComment}
              setNewComment={setNewComment}
              handleAddComment={handleAddComment}
            />
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
