import { teamMainArea } from "@/data/teamArea";
import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamItem from "./TeamItem";

const TeamMainArea = ({ className = "", count = 3, users = null }) => {
  return (
    <div className={`team-main-area ${className}`}>
      <Container>
        <Row className="justify-content-center title">
          {users &&
            users
              .slice(0, count)
              .map((team) => <TeamItem key={team.id} team={team} />)}
        </Row>
      </Container>
    </div>
  );
};

export default TeamMainArea;
