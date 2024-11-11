import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const response = await fetch(
            `http://localhost:3636/events/find-one/${id}`
          );
          const data = await response.json();
          setEvent(data);
        } catch (error) {
          console.error("Error fetching event:", error);
        }
      };

      fetchEvent();
    }
  }, [id]);

  if (!event) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <Container className="mt-5 event-details">
      <Row className="align-items-center mb-4">
        <Col md={8} className="mb-3 mb-md-0">
          <h1 className="text-primary">{event.title}</h1>
          <Badge bg="secondary" className="mb-2">
            {event.category}
          </Badge>
        </Col>
        <Col md={4} className="text-md-end">
          <div className="d-flex align-items-center justify-content-md-end">
            <FaRegCalendarAlt className="me-2 text-muted" />
            <span className="text-muted small">
              <time dateTime={event.startDate}>
                {new Date(event.startDate).toLocaleDateString()}
              </time>{" "}
              -{" "}
              <time dateTime={event.endDate}>
                {new Date(event.endDate).toLocaleDateString()}
              </time>
            </span>
          </div>
        </Col>
      </Row>

      <div className="position-relative mb-4">
        <Image
          src={event.image}
          alt={event.title}
          width={800}
          height={400}
          layout="responsive"
          objectFit="contain"
          className="rounded shadow-sm"
        />
      </div>
      <div className="event-content bg-light p-4 rounded shadow-sm">
        <h2 className="mb-3">Event Description</h2>
        <p
          className="text-wrap"
          style={{
            textAlign: "justify",
          }}
        >
          {event.description}
        </p>
      </div>
    </Container>
  );
};

export default EventDetails;
