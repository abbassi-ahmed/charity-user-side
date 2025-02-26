import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";
import { useRootContext } from "@/context/context";

const DonationProject = ({ project }) => {
  const { image, name, description } = project;
  const router = useRouter();

  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const menuRef = useRef(null);
  const [phone, setPhone] = useState("");
  const { user } = useRootContext();

  const [errors, setErrors] = useState({
    token: "",
    amount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phoneNumber);
    }

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [user]);

  const handleDonate = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!amount) {
      formErrors.amount = "Please enter an amount";
    }
    if (!firstName) {
      formErrors.firstName = "Please enter your first name";
    }
    if (!lastName) {
      formErrors.lastName = "Please enter your last name";
    }
    if (!email) {
      formErrors.email = "Please enter your email";
    }
    if (!phone) {
      formErrors.phone = "Please enter your phone number";
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) {
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.olympiquemnihla.com/payments/project-donation",
        {
          token: "TND",
          amount: parseFloat(amount),
          description: description,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phone,
          projectId: project.id,
        }
      );
      if (response.status === 204) {
        toast.error("Email Not found");
        setLoading(false);
      } else if (response.data.url) {
        router.push(response.data.url);
        setToken("");
        setAmount("");
        setFirstName("");
        setLastName("");
        setLoading(false);
        setEmail("");
        setPhone("");
      } else {
        console.error("Error: URL is undefined");
      }
    } catch (error) {
      console.error("Error donating:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="project-details-area pt-120 pb-190">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="project-details-thumb">
              <Image src={image} alt={name} width={400} height={400} />
              <div className="icon">
                <i className="fa fa-heart"></i>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="donation-form">
              <h3>Support {name}</h3>
              <p>{description}</p>
              <form
                onSubmit={handleDonate}
                className="project-form mt-30 d-flex flex-column gap-3"
              >
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  className={`p-2 rounded border border-gray shadow-sm bg-light text-gray ${
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
                  className={`p-2 rounded border border-gray shadow-sm bg-light text-gray ${
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
                  className={`p-2 rounded border border-gray shadow-sm bg-light text-gray ${
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
                  className={`p-2 rounded border border-gray shadow-sm bg-light text-gray ${
                    errors.phone && "border-danger"
                  }`}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrors({ ...errors, phone: "" });
                  }}
                />
                {/* <Col
                  lg={5}
                  className={`d-flex gap-3 align-items-center justify-content-center mt-3 mb-3 p-2 rounded border border-gray shadow-sm bg-light text-gray w-100 ${
                    errors.token && "border-danger"
                  }`}
                >
                  <input
                    type="radio"
                    name="token"
                    value="TND"
                    checked={token === "TND"}
                    onChange={(e) => {
                      setToken(e.target.value);
                      setErrors({ ...errors, token: "" });
                    }}
                  />
                  TND
                  <input
                    type="radio"
                    name="token"
                    value="USD"
                    checked={token === "USD"}
                    onChange={(e) => {
                      setToken(e.target.value);
                      setErrors({ ...errors, token: "" });
                    }}
                  />
                  USD
                  <input
                    type="radio"
                    name="token"
                    value="EUR"
                    checked={token === "EUR"}
                    onChange={(e) => {
                      setToken(e.target.value);
                      setErrors({ ...errors, token: "" });
                    }}
                  />
                  EUR
                </Col> */}
                <input
                  type="text"
                  placeholder="Amount"
                  className={`p-2 rounded border border-gray shadow-sm bg-light text-gray ${
                    errors.amount && "border-danger"
                  }`}
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setErrors({ ...errors, amount: "" });
                  }}
                />

                <Button className="main-btn" type="submit" disabled={loading}>
                  {loading ? (
                    <div
                      className="spinner-border text-light spinner-border-sm"
                      role="status"
                    ></div>
                  ) : (
                    <>Faire un don</>
                  )}
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Toaster />
    </section>
  );
};

export default DonationProject;
