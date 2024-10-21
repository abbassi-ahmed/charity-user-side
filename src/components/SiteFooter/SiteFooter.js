import footerData from "@/data/siteFooter";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import FooterList from "./FooterList";

const { bg, logo, text, author, year, links, socials, text2, shape } =
  footerData;

const SiteFooter = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <footer
      className="footer-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col lg={4} md={6} sm={8}>
            <Link href="/">
              <Image src={logo.src} alt="" width={300} height={300} />
            </Link>
          </Col>
          <FooterList title="Membres" list={links.slice(0, 5)} />
          <FooterList title="Activité" list={links.slice(5, 9)} />
          <FooterList title="Support" list={links.slice(9)} />
        </Row>
      </Container>
      <div className="footer-shape">
        <Image src={shape.src} alt="" />
      </div>
    </footer>
  );
};

export default SiteFooter;
