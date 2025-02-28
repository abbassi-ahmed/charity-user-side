import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Tabs, Tab, Image } from "react-bootstrap";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/Reuseable/PageTitle";
import Subscription from "@/components/cards/subscription";
import { useRootContext } from "@/context/context";

export default function ClubDetail() {
  const [clubDetail, setClubDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const { user } = useRootContext();
  const fetchClubDetail = async (clubId) => {
    try {
      setLoading(true);
      const clubResponse = await axios.get(
        `https://api.olympiquemnihla.com/clubs/find-one/${clubId}`
      );
      setClubDetail(clubResponse.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchClubDetail(id);
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Détail du club" />
        <Container className="py-5 text-center">Chargement...</Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Détail du club" />
        <Container className="py-5 text-center text-danger">{error}</Container>
      </Layout>
    );
  }

  if (!clubDetail) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Détail du club" />
        <Container className="py-5 text-center text-info">
          Aucun détail de club trouvé.
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title={clubDetail.name} />
      <div className="club-cover">
        <div
          className="cover-image"
          style={{
            backgroundImage: `url(${clubDetail.cover || "/placeholder.svg"})`,
            width: "80%",
            margin: "auto",
          }}
        >
          <div className="logo-container">
            <Image
              src={clubDetail.logo || "/placeholder.svg"}
              alt={clubDetail.name}
              roundedCircle
              width={100}
              height={100}
              className="club-logo"
            />
          </div>
        </div>
      </div>
      <Container className="py-5">
        <Tabs defaultActiveKey="description" id="club-tabs" className="mb-3">
          <Tab eventKey="description" title="Description">
            <p>{clubDetail.description}</p>
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            {clubDetail.images?.length > 0 ? (
              clubDetail.images.map((image, index) => (
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
            {clubDetail.subscriptions?.length > 0 ? (
              clubDetail.subscriptions.map((subscription) => (
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
        .club-cover {
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
        .club-logo {
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
