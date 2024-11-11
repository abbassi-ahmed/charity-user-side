import React from "react";
import { Col, Image } from "react-bootstrap";

const TeamItem = ({ team = {} }) => {
  const { avatar, twitter, facebook, instagram, firstName, lastName, email } =
    team;

  return (
    <Col lg={4} md={7}>
      <div className="team-item mt-30">
        <div className="team-thumb">
          <Image src={avatar} alt="team" />
          <div className="share">
            <i className="fa fa-share-alt"></i>
            <ul>
              <li>
                <a href={twitter}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={facebook}>
                  <i className="fa fa-facebook-official"></i>
                </a>
              </li>
              <li>
                <a href={instagram}>
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team-content text-center">
          <h5 className="title">{firstName + " " + lastName}</h5>
          <span>{email}</span>
        </div>
      </div>
    </Col>
  );
};

export default TeamItem;
