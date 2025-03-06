import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import Image from "next/image";
import Link from "@/components/Reuseable/Link";

const Sports = () => {
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSports = async () => {
    try {
      const response = await fetch(
        "https://api.olympiquemnihla.com/sports/find-all"
      );
      if (!response.ok) throw new Error("Failed to fetch sports");
      const data = await response.json();
      setSportsData(data);
    } catch (err) {
      console.error("Error fetching sports:", err);
      setError("Failed to load sports.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSports();
  }, []);

  if (sportsData && sportsData.length === 0) {
    return (
      <Layout>
        <Header />
        <PageTitle title="Club" />
        <div
          className="sports-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
          }}
        >
          <p>Aucun Club disponible</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <PageTitle title="Sports" />
      <div className="sports-wrapper">
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
                {sportsData.map((sport) => (
                  <Col key={sport.id}>
                    <Card className="sport-card h-100">
                      <div className="sport-cover-container">
                        <Card.Img
                          variant="top"
                          src={sport.cover}
                          alt={`${sport.name} cover`}
                          className="sport-cover-img"
                        />
                        <div className="sport-logo-container">
                          <Image
                            src={sport.logo || "/placeholder.svg"}
                            alt={`${sport.name} logo`}
                            className="sport-logo"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title className="sport-title">
                          {sport.name}
                        </Card.Title>
                        <Card.Text className="sport-description">
                          {sport.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-white">
                        <Link
                          href={`/sportDetail/${sport.id}`}
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

export default Sports;
