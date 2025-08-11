import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";
import DonateSvg from "../../assets/svgs/donation.svg";
import Image from "next/image";

const DonationAll = () => {
  const router = useRouter();

  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cin, setCin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    token: "",
    amount: "",
    firstName: "",
    lastName: "",
    cin: "",
    email: "",
    phone: "",
  });

  const handleDonate = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!amount) {
      formErrors.amount = "Veuillez entrer un montant";
    }
    if (!firstName) {
      formErrors.firstName = "Veuillez entrer votre prénom";
    }
    if (!lastName) {
      formErrors.lastName = "Veuillez entrer votre nom";
    }
    if (!email) {
      formErrors.email = "Veuillez entrer votre e-mail";
    }
    if (!phone) {
      formErrors.phone = "Veuillez entrer votre numéro de téléphone";
    }
    if (!cin) {
      formErrors.cin = "Veuillez entrer votre CIN";
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) {
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.olympiquemnihla.com/payments/donation",
        {
          token: "TND",
          amount: parseFloat(amount),
          description: "Donate for us to help more people",
          firstName: firstName,
          cin: cin,
          lastName: lastName,
          email: email,
          phoneNumber: phone,
        }
      );
      if (response.status === 204) {
        toast.error("Email Not found");
        setLoading(false);
      } else if (response.data.url) {
        router.push(response.data.url);
        setToken("");
        setAmount("");
        setCin("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setLoading(false);
      } else {
        console.error("Error: URL is undefined");
      }
    } catch (error) {
      console.error("Error donating:", error);
    }
  };

  return (
    <section className="project-details-area pt-120 pb-190">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="project-details-thumb">
              <Image src={DonateSvg} alt={"Donation Picture"} />
              <div className="icon">
                <i className="fa fa-heart"></i>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="donation-form">
              <form
                onSubmit={handleDonate}
                className="project-form mt-30 d-flex flex-column gap-3"
              >
                <input
                  type="text"
                  placeholder="E-mail"
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
                  placeholder="Prénom"
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
                  placeholder="Nom"
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
                  placeholder="Téléphone"
                  className={`p-2 rounded border border-gray shadow-sm bg-light text-gray ${
                    errors.phone && "border-danger"
                  }`}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrors({ ...errors, phone: "" });
                  }}
                />
                <input
                  type="text"
                  placeholder="CIN"
                  className={`p-2 rounded border border-gray shadow-sm bg-light text-gray ${
                    errors.cin && "border-danger"
                  }`}
                  value={cin}
                  onChange={(e) => {
                    setCin(e.target.value);
                    setErrors({ ...errors, cin: "" });
                  }}
                />
                <input
                  type="text"
                  placeholder="Montant"
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

export default DonationAll;
