import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      setLoader(true);
      const response = await axios.post(
        `https://api.olympiquemnihla.com/users/signin`,
        { email: formData.email.toLowerCase(), password: formData.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (
        response.status === 200 ||
        (response.status === 201 && response.data.token)
      ) {
        localStorage.setItem("token", response.data.token);
        router.push("/");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Error signing in");
      } else if (error.request) {
        setErrorMessage("No response received from the server.");
      } else {
        setErrorMessage(error.message);
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="auth-section">
      <PageTitle title="Sign In" />
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="auth-form">
              <h2 className="mt-4 text-center">Sign In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  disabled={loader}
                >
                  {loader ? (
                    <div
                      className="spinner-border text-light spinner-border-sm"
                      role="status"
                    ></div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </Form>
              {errorMessage && (
                <p className="mt-3 text-center text-danger">{errorMessage}</p>
              )}
              <p className="mt-3 text-center mb-5">
                Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
