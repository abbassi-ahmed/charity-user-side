import { Col, Container, Row } from "react-bootstrap";
import EventItem from "./EventItem";
import { useEffect, useState } from "react";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://api.olympiquemnihla.com/events/find-all"
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-page-area">
      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id} lg={4} md={6} sm={6}>
              <EventItem event={event} className="mt-30" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EventsPage;
