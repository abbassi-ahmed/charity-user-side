import { whyChoose } from "@/data/whyChoose";
import { funFacts } from "@/data/funFacts";
import React, { useState, useEffect, Suspense } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import axios from "axios";
import {
  SkeletonCategoriesBoxItem,
  SkeletonWhyChooseItem,
} from "../skeletonLoader/skeletonLoader";
// const { title, thumb, thumb2, tagline, title2, items } = whyChoose;

const Item = ({ item = {} }) => {
  const { title, text } = item;
  return (
    <div className="item mt-50">
      <i className="flaticon-checkmark"></i>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

const Thumb = ({ thumb }) => {
  return (
    <div className="thumb">
      <Image src={thumb} alt="" />
    </div>
  );
};

const WhyChoose = () => {
  const [whyChooseData, setWhyChooseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.olympiquemnihla.com//why-choose-section/find-all"
      );
      setWhyChooseData(response.data);
    } catch (error) {
      console.error("Error fetching why choose data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="why-choose-area">
      <Container>
        {loading ? (
          <SkeletonWhyChooseItem />
        ) : (
          <Row>
            <Col lg={6}>
              <div className="why-choose-thumb d-block d-sm-flex">
                <div className="item-1">
                  <div className="conent">
                    <h4
                      className="title text-wrap"
                      style={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {whyChooseData[0]?.title}
                    </h4>
                  </div>
                  <Thumb thumb={whyChooseData[0]?.thumb} />
                </div>
                <div className="item-2">
                  <Thumb thumb={whyChooseData[0]?.thumb2} />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="why-choose-content">
                <span>{whyChooseData[0]?.tagline}</span>
                <h3 className="title">{whyChooseData[0]?.title2}</h3>
                {whyChooseData[0]?.items.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default WhyChoose;
