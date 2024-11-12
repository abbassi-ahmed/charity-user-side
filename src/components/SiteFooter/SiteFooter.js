import footerData, { footerData2 } from "@/data/siteFooter";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FooterList from "./FooterList";

const { bg, logo, text2, shape, socials } = footerData;
const { linksNav, Categories } = footerData2;
const SiteFooter = () => {
  return (
    <footer
      className="footer-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col lg={4} md={6} sm={8}>
            <div className="footer-about">
              <Image src={logo.src} alt="" width={300} height={300} />
              <p>
                Unis pour agir : ensemble, construisons un avenir solidaire et
                durable.
              </p>
              <ul>
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <i className={icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
        <Row>
          <Col lg={12}>
            <div className="footer-copyright text-center">
              <p>
                © Copyright {2024} by {"InnoSys"}
              </p>
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
