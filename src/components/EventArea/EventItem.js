import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function EventItem({ event }) {
  return (
    <Card className="h-100 shadow-sm hover-shadow-lg transition-all duration-300 cursor-pointer">
      <Link href={`/event/${event.id}`} passHref>
        <Card.Body className="d-flex flex-column p-0">
          <div className="position-relative">
            <Card.Img
              variant="top"
              src={event.image || "https://via.placeholder.com/400x300.png"}
              alt={event.title || "Image de l'événement"}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="position-absolute top-0 end-0 m-2">
              <span className="badge bg-light text-dark">{event.category}</span>
            </div>
            <div
              className="position-absolute bottom-0 start-0 w-100 bg-gradient-dark"
              style={{ height: "50%" }}
            ></div>
          </div>
          <div className="p-3 flex-grow-1 d-flex flex-column">
            <Card.Title className="h5 text-truncate mb-2 text-primary">
              {event.title}
            </Card.Title>

            <div className="d-flex align-items-center text-muted small">
              <FaRegCalendarAlt className="me-2" />

              <time dateTime={event.startDate}>
                {new Date(event.startDate).toLocaleDateString()} -{" "}
                {new Date(event.endDate).toLocaleDateString()}
              </time>
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}
