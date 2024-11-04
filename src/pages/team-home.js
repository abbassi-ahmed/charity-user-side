import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import Title from "@/components/Reuseable/Title";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TeamHome = ({ users }) => {
  return (
    <div>
      <section className={`explore-projects-area `}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Title
                tagline={"Voici notre"}
                title={"Équipe"}
                className="text-center"
              />
            </Col>
          </Row>
          <TeamMainArea
            className="about-team-main-area team-page-area"
            count={users.length}
            users={users}
          />
        </Container>
      </section>
    </div>
  );
};

export default TeamHome;
