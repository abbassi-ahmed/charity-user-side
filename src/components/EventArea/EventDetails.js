import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Image from "next/image";

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const response = await fetch(
            `https://api.olympiquemnihla.com//events/find-one/${id}`
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
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="event-details-page">
        <Image
          src={event.image}
          alt={event.title}
          width={300}
          height={200}
          layout="responsive"
        />
        <h1>{event.title}</h1>
        <p>
          {event.startDate} - {event.endDate}
        </p>
        <div className="event-content">
          <p>{event.content}</p>
        </div>
      </div>
    </Container>
  );
};

export default EventDetails;
