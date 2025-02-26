import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import PageTitle from "@/components/Reuseable/PageTitle";
import { useRootContext } from "@/context/context";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const { fetchUser } = useRootContext();

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
        fetchUser();
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
    <div style={{ marginBottom: "50px" }}>
      <PageTitle title="Se connecter" />
      <Row className="justify-content-center">
        <Col lg={5} md={7}>
          <Card className="shadow-lg border-0 rounded-lg mt-5">
            <Card.Body>
              <h2 className="text-center font-weight-light my-4">
                Se connecter
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Entrer votre email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Entrer votre mot de passe"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                  <Button variant="primary" type="submit" disabled={loader}>
                    {loader ? (
                      <span>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Connexion...
                      </span>
                    ) : (
                      "Se connecter"
                    )}
                  </Button>
                </div>
              </Form>
              {errorMessage && (
                <Alert variant="danger" className="mt-3">
                  {errorMessage}
                </Alert>
              )}

              <div className="text-center mt-3">
                <span className="small">Vous n&apos;avez pas de compte ?</span>{" "}
                <Link href="/sign-up" className="small text-decoration-none">
                  S&apos;inscrire
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
