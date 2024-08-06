import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const EventItem = ({ event = {}, className = "" }) => {
  const { image, title, startDate, endDate, id } = event;
  return (
    <div className={`event-item ${className}`}>
      <Link href={`/event/${id}`}>
        <a>
          <Image src={image} alt={title} />
          <div className="event-details">
            <h4>{title}</h4>
            <p>
              {startDate} - {endDate}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EventItem;
