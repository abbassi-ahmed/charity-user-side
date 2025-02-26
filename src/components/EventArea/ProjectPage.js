import { Col, Container, Row } from "react-bootstrap";
import EventItem from "./EventItem";
import { useEffect, useState } from "react";
import noData from "../../assets/svgs/noData.svg";
import Image from "next/image";

const ProjectPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://api.olympiquemnihla.com/events/find-by-category",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ category: "project" }),
          }
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  if (!events.length) {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "50vh", width: "100%" }}
      >
        <Image src={noData} alt="No Data Found" width={200} height={200} />
        <h1>Aucun événement trouvé</h1>
      </div>
    );
  }
  return (
    <div className="events-page-area">
      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id} lg={4} md={6} sm={6} className="mb-20 mt-20">
              <EventItem event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectPage;
