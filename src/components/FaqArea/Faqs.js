import React, { useState } from "react";

const Faq = ({ faq, current, handleCurrent, index }) => {
  const { id, question, answer } = faq;
  const active = current === id;

  return (
    <li className={`accrodion overflow-hidden${active ? " active" : ""}`}>
      <div className="accrodion-inner">
        <div onClick={() => handleCurrent(id)} className="accrodion-title">
          <h4>
            <span>{index + 1}.</span> {question}
          </h4>
        </div>
        <div className={`accrodion-content${active ? "" : " d-none"}`}>
          <div className={`inner animated${active ? " fadeInUp" : ""}`}>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

const Faqs = ({ faqs, className = "" }) => {
  const [current, setCurrent] = useState(null);
  const handleCurrent = (id) => {
    setCurrent(current === id ? null : id);
  };
  if (!Array.isArray(faqs)) {
    faqs = [faqs];
  }
  return (
    <div className={`faq-accordion overflow-hidden ${className}`}>
      <ol
        className={`accrodion-grp${
          !className ? " animated fadeInLeft" : ""
        } faq-accrodion`}
        style={{ listStyleType: "decimal" }}
      >
        {faqs.map((faq, i) => (
          <Faq
            index={i}
            faq={faq}
            key={faq.id}
            current={current}
            handleCurrent={handleCurrent}
          />
        ))}
      </ol>
    </div>
  );
};

export default Faqs;
