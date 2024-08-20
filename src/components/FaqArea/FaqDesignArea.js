import { faqDesignArea } from "@/data/faqArea";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Faqs from "./Faqs";

const { navItems, tabPane } = faqDesignArea;

const NavItem = ({ navItem = {}, current, setCurrent }) => {
  const { href, icon, name } = navItem;

  return (
    <li className="nav-item" role="presentation">
      <a
        onClick={() => setCurrent(href)}
        className={`nav-link cursor-pointer${
          href === current ? " active" : ""
        }`}
        role="tab"
      >
        <i className={icon}></i> {name}
      </a>
    </li>
  );
};

const SingleTab = ({ tab = {}, current }) => {
  const { id, faqsData } = tab;
  const active = current === id;

  return (
    <div
      className={`tab-pane animated${active ? " fadeIn show active" : ""}`}
      id={id}
    >
      <Row>
        {faqsData.map((faqs, i) => (
          <Col key={i} lg={6}>
            <Faqs faqs={faqs} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const FaqDesignArea = () => {
  const [current, setCurrent] = useState("pills-1");
  const fetchFaqData = async () => {
    try {
      const response = await axios.get(
        "http://194.164.54.216:3636/faq/find-all"
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching faq data:", error);
    }
  };
  useEffect(() => {
    fetchFaqData();
  }, []);

  return (
    <section className="faq-design-area pb-120">
      <Container>
        <Row>
          <Col lg={12}>
            {/* <div className="faq-tab-btn">
              <ul className="nav nav-pills justify-content-between">
                {navItems.map((navItem) => (
                  <NavItem
                    navItem={navItem}
                    key={navItem.id}
                    current={current}
                    setCurrent={setCurrent}
                  />
                ))}
              </ul>
            </div> */}
            <div className="tab-content mt-55" id="pills-tabContent">
              {tabPane.map((tab) => (
                <SingleTab key={tab.id} tab={tab} current={current} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqDesignArea;
