import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import Image from "next/image";
import Link from "@/components/Reuseable/Link";

const Clubs = () => {
  const [clubsData, setClubsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchClubs = async () => {
    try {
      const response = await fetch(
        "https://api.olympiquemnihla.com/clubs/find-all"
      );
      if (!response.ok) throw new Error("Failed to fetch clubs");
      const data = await response.json();
      setClubsData(data);
    } catch (err) {
      console.error("Error fetching clubs:", err);
      setError("Failed to load clubs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  if (clubsData && clubsData.length === 0) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Club" />
        <div className="clubs-wrapper">
          <p>Aucun Club disponible</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Clubs" />
      <div className="clubs-wrapper">
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
          <div className="my-5">
            <Container>
              <Row xs={1} md={2} lg={3} className="g-4">
                {clubsData.map((club) => (
                  <Col key={club.id}>
                    <Card className="club-card h-100">
                      <div className="club-cover-container">
                        <Card.Img
                          variant="top"
                          src={club.cover}
                          alt={`${club.name} cover`}
                          className="club-cover-img"
                        />
                        <div className="club-logo-container">
                          <Image
                            src={club.logo || "/placeholder.svg"}
                            alt={`${club.name} logo`}
                            className="club-logo"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title className="club-title">
                          {club.name}
                        </Card.Title>
                        <Card.Text className="club-description">
                          {club.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-white">
                        <Link
                          href={`/clubDetail/${club.id}`}
                          passHref
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <Button variant="primary" className="w-100">
                            <p className="text-white">Voire plus</p>
                          </Button>
                        </Link>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Clubs;
