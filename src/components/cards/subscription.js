import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Subscription({ key, title, description, price, user }) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
    }
  }, [user]);

  const handleDonate = async (e) => {
    e.preventDefault();
    // Handle donation logic here
    if (phone === "") {
      setErrors({ phone: "Please enter your phone number" });
    } else {
      console.log(price, firstName, lastName, email, phone);
      const response = await axios.post(
        "http://localhost:3636/payments/create",
        {
          token: "TND",
          amount: 6000,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phone,
          subscriptionId: 2,
        }
      );
      if (response.status === 204) {
        toast.error("Email Not found");
      } else if (response.data.url) {
        router.push(response.data.url);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      } else {
        console.error("Error: URL is undefined");
      }

      toggleModal();
    }
    // Close the modal after submission
  };

  return (
    <div className="container-card" key={key}>
      <h2 className="title-card">{title}</h2>
      <p className="body-card">{description}</p>
      <div className="payment-card">
        {price}
        <span className="text-xl">/Year</span>
      </div>
      <button
        className="btn-card"
        onClick={() => {
          if (!user) {
            router.push("/sign-in");
          } else {
            toggleModal();
          }
        }}
      >
        Subscribe
      </button>

      {/* Modal */}
      {modal && user && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2 className="title-card">Subscribe to {title}</h2>
            <form
              onSubmit={handleDonate}
              className="project-form d-flex flex-column gap-3"
            >
              <input
                type="text"
                placeholder="Email"
                value={email}
                className={`p-2 rounded border shadow-sm bg-light text-gray ${
                  errors.email && "border-danger"
                }`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
              />
              <input
                type="text"
                placeholder="First Name"
                className={`p-2 rounded border shadow-sm bg-light text-gray ${
                  errors.firstName && "border-danger"
                }`}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors({ ...errors, firstName: "" });
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={`p-2 rounded border shadow-sm bg-light text-gray ${
                  errors.lastName && "border-danger"
                }`}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setErrors({ ...errors, lastName: "" });
                }}
              />
              <input
                type="text"
                placeholder="Phone"
                className={`p-2 rounded border shadow-sm bg-light text-gray ${
                  errors.phone && "border-danger"
                }`}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrors({ ...errors, phone: "" });
                }}
              />

              <button className="btn-card" type="submit">
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
