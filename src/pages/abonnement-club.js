import Subscription from "@/components/cards/subscription";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import PageTitle from "@/components/Reuseable/PageTitle";
import { useRootContext } from "@/context/context";

import React, { useEffect, useState } from "react";

const Abonnement = () => {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useRootContext();

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(
        "https://api.olympiquemnihla.com/subscription/get-type?type=club"
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

  useEffect(() => {
    fetchSubscriptions();
  }, []);
  if (subscriptionData.length === 0) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Abonnement Sport" />
        <div className="subscription-wrapper">
          <p>No subscriptions available</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Abonnement Club" />
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
