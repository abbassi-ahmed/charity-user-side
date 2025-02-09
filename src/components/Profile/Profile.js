import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import NoPayment from "../../assets/svgs/empty-cart.svg";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [avatarFile, setAvatarFile] = useState(null);

  const [avatarPreview, setAvatarPreview] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3636/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setFormData({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          });
          setAvatarPreview(data.avatar);

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else {
      router.push("/sign-in");
      setLoading(false);
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    if (avatarFile) {
      formDataToSend.append("avatar", avatarFile);
    }
    setLoader(true);
    fetch(`http://localhost:3636/users/update/${user.id}`, {
      method: "PUT",
      body: formDataToSend,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        toast.success("Profile updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Error updating profile.");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "300px", width: "100%" }}
      >
        <div className="pageLoader"></div>
      </div>
    );
  }

  return (
    <Container
      className="profile-container"
      style={{
        minHeight: "60vh",
        width: "100%",
        padding: "20px",
      }}
    >
      <Row className="justify-content-between" style={{ height: "100%" }}>
        <Col lg={6} className="mb-5">
          <h2 className="text-center mb-3"> Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAvatar">
              <Form.Label>Upload Avatar</Form.Label>
              <label
                className="avatar-preview"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  backgroundColor: "#f0f0f0",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                {avatarPreview ? (
                  <Image
                    src={avatarPreview}
                    alt="Avatar Preview"
                    className="avatar-image"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                ) : (
                  <span></span>
                )}
                <Form.Control
                  type="file"
                  name="avatar"
                  hidden
                  onChange={handleFileChange}
                />
              </label>
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="Prénom"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="Nom"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-3 text-center align-self-center"
              style={{ width: "100%" }}
              disabled={loader}
            >
              {loader ? (
                <div
                  className="spinner-border text-light spinner-border-sm"
                  role="status"
                ></div>
              ) : (
                <>
                  <FontAwesomeIcon icon={faSave} /> Enregistrer
                </>
              )}
            </Button>
          </Form>
        </Col>
        <Col lg={4} className="mb-3 text-center">
          <h2 className="mb-5"> Abonnements</h2>
          {user?.userSubscriptions?.length ? (
            <div className="scrollable-container">
              {user.userSubscriptions.map((subscription, index) => (
                <div key={index} className="container-card">
                  <h3 className="title-card">
                    {subscription.subscription.title}
                  </h3>
                  <p className="body-card">
                    {subscription.subscription.description}
                  </p>
                  <div className="btn-card">
                    <span className="text-lg">
                      Se termine le:{" "}
                      {new Date(subscription.dateEnd).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <Image
                src={NoPayment}
                alt="No Payment"
                className="no-payment-image"
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <h4>Vous n&apos;avez pas dapos;abonnements</h4>
            </div>
          )}
        </Col>
      </Row>

      <Toaster />
    </Container>
  );
};

export default Profile;
