import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  ProgressBar,
  Button,
  Badge,
  Image,
  Tabs,
  Tab,
} from "react-bootstrap";
import Link from "../../Reuseable/Link";
import {
  FaHeart,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

const ProjectDetailsArea = ({ project, sum }) => {
  const {
    name,
    image,
    shortDescription,
    longDescription,
    target,
    startDate,
    targetDate,
    Status,
    id,
  } = project;
  const [imageLoad, setImageLoad] = useState(false);

  const amount = sum && sum.sum ? sum.sum : 0;
  const progress = (amount / Number.parseInt(target)) * 100;

  const handleImageLoad = () => {
    setImageLoad(true);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="project-details-area py-5">
      <Container>
        <Row className="gy-4">
          <Col lg={6}>
            <Card className="shadow-sm ">
              <div className="position-relative">
                {!imageLoad && (
                  <div
                    className="d-flex justify-content-center align-items-center bg-light"
                    style={{ height: "400px" }}
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                <Image
                  src={image || "/placeholder.svg"}
                  alt={name}
                  width={400}
                  height={400}
                  onLoad={handleImageLoad}
                  style={{
                    display: imageLoad ? "block" : "none",
                    objectFit: "cover",
                    width: "100%",
                    height: "400px",
                  }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <Button variant="light" className="rounded-circle p-2">
                    <FaHeart className="text-danger" />
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Badge
                  bg={Status === "Active" ? "success" : "secondary"}
                  className="align-self-start px-3 py-2 mb-3"
                >
                  {typeof Status === "string" ? Status : "Unknown Status"}
                </Badge>
                <Card.Title as="h2" className="mb-3">
                  {typeof name === "string" ? name : "Project Name"}
                </Card.Title>
                <Card.Text className="lead mb-4">
                  {typeof shortDescription === "string"
                    ? shortDescription
                    : "No description available."}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <h4 className="mb-3">Détails du projet</h4>
                <Row className="text-center">
                  <Col xs={6} md={3} className="mb-3">
                    <FaMoneyBillWave className="text-primary mb-2" size={24} />
                    <h5>{target} TND</h5>
                    <small className="text-muted">Cible</small>
                  </Col>
                  <Col xs={6} md={3} className="mb-3">
                    <FaChartLine className="text-success mb-2" size={24} />
                    <h5>{amount === 0 ? 0 : `${amount} TND`}</h5>
                    <small className="text-muted">Montant collecté</small>
                  </Col>
                  <Col xs={6} md={3} className="mb-3">
                    <FaCalendarAlt className="text-info mb-2" size={24} />
                    <h5>{formatDate(startDate)}</h5>
                    <small className="text-muted">Date de début</small>
                  </Col>
                  <Col xs={6} md={3} className="mb-3">
                    <FaCalendarAlt className="text-warning mb-2" size={24} />
                    <h5>{formatDate(targetDate)}</h5>
                    <small className="text-muted">Date de fin</small>
                  </Col>
                </Row>

                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="h3 mb-0 text-primary">{amount} TND</span>
                    <span className="text-muted">
                      {progress.toFixed(2)}% complété
                    </span>
                  </div>
                  <ProgressBar
                    now={progress}
                    label={`${progress.toFixed(2)}%`}
                    className="mb-4"
                    style={{ height: "10px" }}
                  />
                  <Link href={`/donation-project/${id}`} passHref>
                    <Button variant="primary" size="lg" className="w-100">
                      Faire un don
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Tabs defaultActiveKey="description" className="mb-3">
                  <Tab eventKey="description" title="Description">
                    <h3 className="mb-3"> A propos du projet</h3>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {typeof longDescription === "string"
                        ? longDescription
                        : "No description available."}
                    </Card.Text>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsArea;
