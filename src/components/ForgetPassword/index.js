import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import PageTitle from "@/components/Reuseable/PageTitle";
import { useRootContext } from "@/context/context";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
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
      await axios
        .post(
          `https://api.olympiquemnihla.com/users/forget-password`,
          { email: formData.email.toLowerCase() },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          toast.success(
            "Si l'email existe, un lien de réinitialisation de mot de passe vous sera envoyé."
          );
        });
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
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
      <PageTitle title="Oubli de mot de passe" />
      <Row className="justify-content-center">
        <Col lg={5} md={7}>
          <Card className="shadow-lg border-0 rounded-lg mt-5">
            <Card.Body>
              <h2 className="text-center font-weight-light my-4">
                Oubli de mot de passe
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

                <div className="d-grid gap-2 mt-4">
                  <Button variant="primary" type="submit" disabled={loader}>
                    {loader ? (
                      <span>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Envoi...
                      </span>
                    ) : (
                      "Envoyer"
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
                <span className="small">
                  {" "}
                  Vous souvenez-vous de votre mot de passe ?{" "}
                </span>
                <Link href="/sign-in" className="small text-decoration-none">
                  Se connecter
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Toaster />
    </div>
  );
};

export default ForgetPassword;
