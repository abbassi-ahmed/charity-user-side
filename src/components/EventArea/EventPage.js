import { Col, Container, Row } from "react-bootstrap";
import EventItem from "./EventItem";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import PageTitle from "../Reuseable/PageTitle";
import noData from "../../assets/svgs/noData.svg";
import Image from "next/image";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3636/events/find-all");
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

export default EventsPage;
