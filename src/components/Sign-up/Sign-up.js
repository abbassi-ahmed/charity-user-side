import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatar: null,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("password", formData.password);
      if (formData.avatar) {
        data.append("avatar", formData.avatar);
      }

      const response = await axios.post(
        `http://localhost:3636/users/signup`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response data:", response.data);
      console.log("Response status:", response.status);

      if (response.status === 200 || response.status === 201) {
        router.push("/sign-in");
      } else {
        console.error("Unexpected response status:", response.status);
        setErrorMessage("Unexpected response status: " + response.status);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        setErrorMessage(error.response.data.message || "Error signing up");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        setErrorMessage("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div>
      <Layout>
        <PageTitle title="Sign Up" />
        <section className="auth-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6} md={8}>
                <div className="auth-form">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formAvatar">
                      <Form.Label>Avatar</Form.Label>
                      <Form.Control
                        type="file"
                        name="avatar"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 mt-3"
                    >
                      Sign Up
                    </Button>
                  </Form>
                  {errorMessage && (
                    <p className="mt-3 text-center text-danger">
                      {errorMessage}
                    </p>
                  )}
                  <p className="mt-3 text-center">
                    Already have an account?{" "}
                    <Link href="/sign-in">Sign In</Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
};

export default SignUp;
