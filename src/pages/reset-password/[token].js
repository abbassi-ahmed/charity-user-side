import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import PageTitle from "@/components/Reuseable/PageTitle";
import { useRootContext } from "@/context/context";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
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
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Les mots de passe ne correspondent pas.");
        setLoader(false);
        return;
      }
      await axios
        .post(
          `https://api.olympiquemnihla.com/users/reset-password`,
          {
            password: formData.password,
            token: token,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          toast.success("Mot de passe réinitialisé avec succès.");
          router.push("/sign-in");
        });
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        setErrorMessage("No response received from the server.");
      } else {
        setErrorMessage(error.message);
      }
    }
    setLoader(false);
  };
  return (
    <Layout>
      <Header />
      <PageTitle title="Réinitialisation" />
      <div style={{ marginBottom: "50px" }}>
        <Row className="justify-content-center">
          <Col lg={5} md={7}>
            <Card className="shadow-lg border-0 rounded-lg mt-5">
              <Card.Body>
                <h2 className="text-center font-weight-light my-4">
                  Réinitialisation de mot de passe
                </h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Confirmer le mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
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
      </div>
      <Toaster />
    </Layout>
  );
}
