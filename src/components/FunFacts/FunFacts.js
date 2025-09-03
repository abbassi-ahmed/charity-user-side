import { funFacts } from "@/data/funFacts";
import React, { useState, useEffect } from "react";
import { Image, Row } from "react-bootstrap";
import FunFactsItem from "./FunFactsItem";
import axios from "axios";

const { shape1, shape2 } = funFacts;

const FunFacts = ({ className = "", home = false }) => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.olympiquemnihla.com/fun-fact-section/find-all"
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

  if (facts && facts.length === 0 && home) return null;
  return (
    <section className={`fun-facts-area ${className}`}>
      <Row>
        {facts.map((fact) => (
          <FunFactsItem key={fact.id} fact={fact} loading={loading} />
        ))}
      </Row>
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
