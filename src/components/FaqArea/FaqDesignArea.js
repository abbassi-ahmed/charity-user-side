import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faqDesignArea } from "@/data/faqArea";
import Faqs from "./Faqs";
import noData from "../../assets/svgs/noData.svg";
import Image from "next/image";
const { navItems } = faqDesignArea;

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

const SingleTab = ({ current, id, faqsData }) => {
  const active = current === id;
  if (!Array.isArray(faqsData)) {
    faqsData = [faqsData];
  }
  return (
    <div
      className={`tab-pane animated${active ? " fadeIn show active" : ""}`}
      id={id}
    >
      <Row>
        {faqsData?.length > 0 ? (
          faqsData.map((faqs, i) => (
            <Col key={i} lg={12}>
              <Faqs faqs={faqs} />
            </Col>
          ))
        ) : (
          <div className="text-center">
            <Image src={noData} alt="No Data Found" width={200} height={200} />

            <h2>No FAQs For This Category</h2>
          </div>
        )}
      </Row>
    </div>
  );
};

const FaqDesignArea = ({ faqData, current, setCurrent }) => {
  return (
    <section className="faq-design-area pb-120">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-tab-btn">
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
            </div>
            <div className="tab-content mt-55" id="pills-tabContent">
              {faqData?.length > 0 ? (
                faqData.map((tab) => (
                  <SingleTab
                    key={tab.id}
                    id={
                      current === "pills-1"
                        ? "pills-1"
                        : current === "pills-2"
                        ? "pills-2"
                        : "pills-3"
                    }
                    faqsData={tab}
                    current={current}
                  />
                ))
              ) : (
                <div className="text-center">
                  <Image
                    src={noData}
                    alt="No Data Found"
                    width={200}
                    height={200}
                  />
                  <h2>No FAQs For This Category</h2>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqDesignArea;
