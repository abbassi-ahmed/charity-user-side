import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const SingleProject = ({ project, projectSums = {} }) => {
  const [imageLoad, setImageLoad] = useState(false);
  const { id, image, startDate, name, description, target } = project;
  const amount = projectSums[id] || 0;
  const progress = target ? (amount / target) * 100 : 0;
  // const handleImageLoad = () => {
  //   setImageLoad(true);
  // };
  return (
    <div
      className="explore-projects-item mt-30"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div
        className="explore-projects-thumb"
        style={{ height: "300px", width: "100%", overflow: "hidden" }}
      >
        {imageLoad ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "300px", width: "100%" }}
          >
            <div className="pageLoader"></div>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            style={{ height: "300px", width: "100%" }}
            // onLoad={handleImageLoad}
          />
        )}
      </div>
      <div className="explore-projects-content" style={{ padding: "20px" }}>
        <div className="item d-flex align-items-center">
          <span>{startDate}</span>
        </div>
        <Link href={`/projects/${project.id}`}>
          <h3 className="title">{name}</h3>
        </Link>
        <div
          style={{
            width: "100%",
            backgroundColor: "#e0e0df",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "20px",
              backgroundColor: "#76c7c0",
              borderRadius: "8px",
              transition: "width 0.3s ease-in-out",
            }}
          >
            <p style={{ color: "white", textAlign: "center" }}>{amount}</p>
          </div>
        </div>
        <div className="projects-goal">
          <span>
            Goal: <span>{target}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
