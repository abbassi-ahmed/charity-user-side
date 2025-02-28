import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Tabs, Tab, Image } from "react-bootstrap";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/Reuseable/PageTitle";
import Subscription from "@/components/cards/subscription";
import { useRootContext } from "@/context/context";

export default function SportDetail() {
  const [sportDetail, setSportDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  const { user } = useRootContext();
  const { id } = router.query;

  const fetchSportDetail = async (sportId) => {
    try {
      setLoading(true);
      const sportResponse = await axios.get(
        `https://api.olympiquemnihla.com/sports/find-one/${sportId}`
      );
      setSportDetail(sportResponse.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSportDetail(id);
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Détail du sport" />
        <Container className="py-5 text-center">Chargement...</Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Détail du sport" />
        <Container className="py-5 text-center text-danger">{error}</Container>
      </Layout>
    );
  }

  if (!sportDetail) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Détail du sport" />
        <Container className="py-5 text-center text-info">
          Aucun détail de sport trouvé.
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title={sportDetail.name} />
      <div className="sport-cover">
        <div
          className="cover-image"
          style={{
            backgroundImage: `url(${sportDetail.cover || "/placeholder.svg"})`,
            width: "80%",
            margin: "auto",
          }}
        >
          <div className="logo-container">
            <Image
              src={sportDetail.logo || "/placeholder.svg"}
              alt={sportDetail.name}
              roundedCircle
              width={100}
              height={100}
              className="sport-logo"
            />
          </div>
        </div>
      </div>
      <Container className="py-5">
        <Tabs defaultActiveKey="description" id="sport-tabs" className="mb-3">
          <Tab eventKey="description" title="Description">
            <p>{sportDetail.description}</p>
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            {sportDetail.images?.length > 0 ? (
              sportDetail.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  width={250}
                  height={250}
                  className="mb-3"
                  style={{ objectFit: "cover", marginRight: "10px" }}
                />
              ))
            ) : (
              <p>Aucune image disponible.</p>
            )}
          </Tab>
          <Tab eventKey="subscriptions" title="Abonnements">
            {sportDetail.subscriptions?.length > 0 ? (
              sportDetail.subscriptions.map((subscription) => (
                <div key={subscription.id} className="subscription-item mb-3">
                  <Subscription
                    description={subscription.description}
                    duration={subscription.duration}
                    price={subscription.price}
                    subscriptionId={subscription.id}
                    title={subscription.title}
                    user={user}
                  />
                </div>
              ))
            ) : (
              <p>Aucun abonnement disponible.</p>
            )}
          </Tab>
        </Tabs>
      </Container>
      <style>{`
        .sport-cover {
          position: relative;
          height: 300px;
          background-size: cover;
          background-position: center;
        }
        .cover-image {
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-container {
          position: absolute;
          bottom: -50px;
          background: white;
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .sport-logo {
          width: 100px;
          height: 100px;
        }
               .subscription-item {
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

        }
      `}</style>
    </Layout>
  );
}
