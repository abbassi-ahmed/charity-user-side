import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [avatarFile, setAvatarFile] = useState(null); // State to hold the selected avatar file
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://194.164.54.216:3636/users/verify", {
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Prepare form data including the avatar file
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    if (avatarFile) {
      formDataToSend.append("avatar", avatarFile);
    }

    fetch(`http://194.164.54.216:3636/users/update/${user.id}`, {
      method: "PUT",
      headers: {
        // No need to set Content-Type for FormData
        // It will be set automatically
        // "Content-Type": "multipart/form-data",
      },
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="profile-container">
      <h2>Edit Profile</h2>
      <Form onSubmit={handleSubmit}>
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
        <Form.Group controlId="formAvatar">
          <Form.Label>Upload Avatar</Form.Label>
          <Form.Control type="file" name="avatar" onChange={handleFileChange} />
        </Form.Group>
        {user && user.avatar && (
          <div className="avatar-preview">
            <Image
              src={user.avatar}
              alt="Avatar Preview"
              width={100}
              height={100}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        <Button variant="primary" type="submit" className="mt-3">
          <FontAwesomeIcon icon={faSave} /> Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
