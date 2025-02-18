import Title from "@/components/Reuseable/Title";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import { teamArea } from "@/data/teamArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TeamHome = ({ users }) => {
  return (
    <section
      className="team-area bg_cover"
      style={{
        backgroundImage: `url(${"https://st.depositphotos.com/1000816/4164/i/450/depositphotos_41649447-Group-of-happy-business-people-in-a-meeting-at-office.jpg"})`,
        objectFit: "cover",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <Title
              title={"Équipe"}
              tagline={"Voici notre"}
              className="section-title-2 text-center"
            />
          </Col>
          <TeamMainArea
            className="about-team-main-area team-page-area"
            count={3}
            users={users}
          />
        </Row>
      </Container>
    </section>
  );
};

export default TeamHome;
