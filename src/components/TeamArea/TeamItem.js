import React from "react";
import { Col, Image } from "react-bootstrap";

const TeamItem = ({ team = {} }) => {
  const {
    avatar,
    twitter,
    facebook,
    instagram,
    firstName,
    lastName,
    email,
    role,
  } = team;

  return (
    <Col lg={4} md={7}>
      <div className="team-item mt-30">
        <div className="team-thumb">
          <Image
            src={avatar}
            alt="team"
            height={400}
            style={{ objectFit: "cover" }}
          />
          <div className="share">
            <i className="fa fa-share-alt"></i>
            <ul>
              <li>
                <a
                  href={`https://${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href={`https://${facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-official"></i>
                </a>
              </li>
              <li>
                <a
                  href={`https://${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team-content text-center bg-white">
          <h5 className="title">{firstName + " " + lastName}</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span>{email}</span>
            <span
              style={{
                textTransform: "capitalize",
                color: "#0073e6",
                fontWeight: "bold",
              }}
            >
              {role}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default TeamItem;
