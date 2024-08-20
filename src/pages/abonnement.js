import Subscription from "@/components/cards/subscription";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import PageTitle from "@/components/Reuseable/PageTitle";

import React, { useEffect, useState } from "react";

const Abonnement = () => {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(
        "http://194.164.54.216:3636/subscription/find-all"
      );
      if (!response.ok) throw new Error("Failed to fetch subscriptions");
      const data = await response.json();
      setSubscriptionData(data);
    } catch (err) {
      console.error("Error fetching subscriptions:", err);
      setError("Failed to load subscriptions.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch("http://194.164.54.216:3636/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) throw new Error("Failed to verify token");
      const data = await response.json();
      if (data && data.firstName) {
        setUser(data);
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    fetchSubscriptions();
    fetchUser();
  }, []);

  return (
    <Layout>
      <Header />
      <PageTitle title="Abonnement" />
      <div className="subscription-wrapper">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "300px", width: "100%" }}
          >
            <div className="pageLoader"></div>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="subscription-grid">
            {subscriptionData.map((sub) => (
              <div key={sub.id}>
                <Subscription
                  title={sub.title}
                  description={sub.description}
                  price={sub.price}
                  user={user}
                  subscriptionId={sub.id}
                  duration={sub.duration}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Abonnement;
