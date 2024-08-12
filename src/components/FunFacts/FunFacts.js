import { funFacts } from "@/data/funFacts";
import React, { useState, useEffect } from "react";
import { Container, Image, Row } from "react-bootstrap";
import FunFactsItem from "./FunFactsItem";
import axios from "axios";

const { shape1, shape2 } = funFacts;

const FunFacts = ({ className = "" }) => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://194.164.54.216:3636/fun-fact-section/find-all"
      );
      setFacts(response.data);
    } catch (error) {
      console.error("Error fetching facts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <section className={`fun-facts-area ${className}`}>
      <Container>
        <Row>
          {facts.map((fact) => (
            <FunFactsItem key={fact.id} fact={fact} loading={loading} />
          ))}
        </Row>
      </Container>
      <div className="fun-facts-shape-1">
        <Image src={shape1.src} alt="" />
      </div>
      <div className="fun-facts-shape-2">
        <Image src={shape2.src} alt="" />
      </div>
    </section>
  );
};

export default FunFacts;
