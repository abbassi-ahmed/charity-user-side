import footerData, { footerData2 } from "@/data/siteFooter";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import FooterList from "./FooterList";
import FooterContact from "./FooterList";

const { bg, logo, text, author, year, links, socials, text2, shape } =
  footerData;
const { linksNav, Categories } = footerData2;
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
          <FooterList title="Olympique mnhila" list={linksNav} />
          <FooterList title="Crowd Funding" list={Categories} />
          <Col lg={4} md={6} sm={8}>
            <div className="footer-newsletter mt-30">
              <div className="footer-title">
                <h4 className="title">Become a Volunteer</h4>
              </div>
              <form>
                <div className="form-group">
                  <a href="/signup" className="main-btn">
                    Signup
                  </a>
                </div>
              </form>
              <p>{text2}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-shape">
        <Image src={shape.src} alt="" />
      </div>
    </footer>
  );
};

export default SiteFooter;
