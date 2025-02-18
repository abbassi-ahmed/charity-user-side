import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Subscription({
  title,
  description,
  price,
  user,
  subscriptionId,
  duration,
}) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
    if (phone === "" || phone === undefined) {
      setErrors({ phone: "Please enter your phone number" });
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:3636/payments/create",
          {
            token: "TND",
            amount: parseFloat(price),
            firstName: firstName,
            lastName: lastName,
            description: "Subscribe to " + title,
            email: email,
            phoneNumber: phone,
            subscriptionId: subscriptionId,
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
      } catch (error) {
        console.error("Error creating payment:", error);
      }
      toggleModal();
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-card" style={{ height: "100%" }}>
        <h2 className="title-card">{title}</h2>
        <p
          className="body-card"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            position: "relative",
          }}
        >
          {description.length > 250
            ? description.substring(0, 250) + "..."
            : description}
        </p>

        <div className="payment-card" style={{ width: "110px" }}>
          {price} TND
          <span className="text-lg">{duration}/ Mois</span>
        </div>

        {user?.userSubscriptions?.some(
          (subscription) => subscription.subscription.id === subscriptionId
        ) ? (
          <button className="btn-card" disabled>
            Vous êtes déjà abonné
          </button>
        ) : (
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
            S&apos;abonner
          </button>
        )}
      </div>
      {modal && user && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2 className="title-card">S&apos;abonner à {title}</h2>
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
              <button className="btn-card" type="submit" disabled={loading}>
                {loading ? (
                  <div
                    className="spinner-border text-light spinner-border-sm"
                    role="status"
                  ></div>
                ) : (
                  <> S&apos;abonner pour {price} TND</>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
