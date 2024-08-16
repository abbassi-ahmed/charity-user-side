import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [avatarFile, setAvatarFile] = useState(null); // State to hold the selected avatar file
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);

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
          setAvatarFile(data.avatar);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }
  }, []);

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
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarFile(reader.result);
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
      headers: {},
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        toast.success("Profile updated successfully.");
      })
      .catch((error) => {
        toast.error("Error updating profile.");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      className="profile-container"
      style={{
        minHeight: "60vh",
        margin: "0 auto",
        width: "40%",
        padding: "20px",
      }}
    >
      <h2 className="text-center mb-3">Edit Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formAvatar ">
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
            {avatarFile ? (
              <Image
                src={avatarFile}
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
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
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
          className="mt-3  text-center align-self-center"
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
              <FontAwesomeIcon icon={faSave} /> Save Changes{" "}
            </>
          )}
        </Button>
      </Form>
      <Toaster />
    </Container>
  );
};

export default Profile;
