import Subscription from "@/components/cards/subscription";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import PageTitle from "@/components/Reuseable/PageTitle";

import React, { useEffect, useState } from "react";

const Abonnement = () => {
  const subscriptionData = [
    {
      title: "Freelancer",
      description:
        "All the basics for starting a new business... All the basics for starting a new business... All the basics for starting a new business...",
      price: "24TND",
    },
    {
      title: "Professional",
      description:
        "Advanced tools and support for your business... All the basics for starting a new business... All the basics for starting a new business...",
      price: "49TND",
    },
    {
      title: "Enterprise",
      description:
        "Comprehensive solutions for large businesses... All the basics for starting a new business... All the basics for starting a new business...",
      price: "99TND",
    },
  ];
  const [user, setUser] = useState(null);
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
          if (data && data.firstName) {
            setUser(data);
            console.log("User data:", data);
          } else {
            localStorage.removeItem("token");
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          localStorage.removeItem("token");
        });
    }
  }, []);
  return (
    <Layout>
      <Header />
      <PageTitle title="Abonnement" />
      <div className="subscription-wrapper">
        <div className="subscription-grid">
          {subscriptionData.map((sub, index) => (
            <Subscription
              key={index}
              title={sub.title}
              description={sub.description}
              price={sub.price}
              user={user}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Abonnement;
