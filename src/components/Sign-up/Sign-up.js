import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import Link from "next/link";
import PageTitle from "../Reuseable/PageTitle";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    dateOfBirth: "",
    avatar: null,
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar" && files?.length > 0) {
      const file = files[0];
      const fileType = file.type;
      const fileName = file.name.toLowerCase();
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      const validExtensions = [".png", ".jpg", ".jpeg"];

      const hasValidType = validTypes.includes(fileType);
      const hasValidExtension = validExtensions.some(ext => fileName.endsWith(ext));

      if (!hasValidType || !hasValidExtension) {
        setErrorMessage("La photo de profil doit être au format .png ou .jpg");
        e.target.value = "";
        setFormData((prevData) => ({
          ...prevData,
          [name]: null,
        }));
        return;
      }

      setErrorMessage(null);
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Le numéro de téléphone doit contenir uniquement des chiffres");
      return false;
    }

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Veuillez entrer une adresse email valide (exemple: utilisateur@domaine.com)");
      return false;
    }

    if (formData.avatar) {
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      const fileName = formData.avatar.name.toLowerCase();
      const validExtensions = [".png", ".jpg", ".jpeg"];

      const hasValidType = validTypes.includes(formData.avatar.type);
      const hasValidExtension = validExtensions.some(ext => fileName.endsWith(ext));

      if (!hasValidType || !hasValidExtension) {
        setErrorMessage("La photo de profil doit être au format .png ou .jpg");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateForm()) {
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      });

      setLoader(true);
      const response = await axios.post(
        "https://api.olympiquemnihla.com/users/signup",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200 || response.status === 201) {
        if (response.data.message === "Email or phone already exists") {
          setErrorMessage("Email  ou numéro de téléphone déjà utilisé");
        } else {
          router.push("/sign-in");
        }
      } else {
        setErrorMessage(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Error signing up");
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
      <PageTitle title="S'inscrire" />
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <Card className="shadow-lg border-0 rounded-lg mt-5">
            <Card.Body>
              <h2 className="text-center font-weight-light my-4">
                S&apos;inscrire
              </h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Entrez votre prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Entrez votre nom"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Entrez votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Entrez votre mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPhone">
                      <Form.Label>Numéro de téléphone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Entrez votre numéro de téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGender">
                      <Form.Label>Genre</Form.Label>
                      <Form.Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choisissez...</option>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                        <option value="other">Autre</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formDateOfBirth">
                      <Form.Label>Date de naissance</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formAvatar">
                  <Form.Label>Photo de profil</Form.Label>
                  <Form.Control
                    type="file"
                    name="avatar"
                    accept=".png,.jpg,.jpeg,image/png,image/jpeg"
                    onChange={handleChange}
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
                        Chargement...
                      </span>
                    ) : (
                      "S'inscrire"
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
                <Link href="/sign-in" className="small">
                  Déjà un compte? Se connecter
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
