import React from "react";
import { Col, Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const NewsItem = ({ news = {}, index = 0, newsTwo = false }) => {
  const { image, createdAt, admin, content, title } = news;
  const newImage = newsTwo && image ? image : image;
  const isEven = (index + 1) % 2 === 0;

  return (
    <div
      style={{ marginRight: "30px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Col style={{ display: "flex", gap: "30px" }}>
        <div className={`news-item mt-30`} style={{ height: "400px" }}>
          <div className="news-thumb">
            <Image
              src={image}
              alt="news"
              style={{ height: "150px", width: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="news-content">
            <span>{new Date(createdAt).toLocaleDateString()}</span>
            <ul>
              <li>
                <i className="fa fa-user-circle"></i>{" "}
                {`${admin.firstName} ${admin.lastName}`}
              </li>
              <li>
                <i className="fa fa-calendar"></i>
                {new Date(createdAt).toLocaleDateString()}
              </li>
            </ul>
            <h3 className="title">{title}</h3>
            <Link href={`/blog/${news.id}`}>
              <i className="flaticon-next"></i>
            </Link>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default NewsItem;
