import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const SingleProject = ({ project, projectSums = {} }) => {
  const { id, image, startDate, name, description, target } = project;
  const amount = projectSums[id] || 0;
  const progress = target ? (amount / target) * 100 : 0;

  return (
    <div className="explore-projects-item mt-30">
      <div className="explore-projects-thumb" style={{ height: "350px" }}>
        <Image
          src={image}
          alt={name}
          style={{ height: "350px", width: "100%" }}
        />
      </div>
      <div className="explore-projects-content">
        <div className="item d-flex align-items-center">
          <span>{startDate}</span>
        </div>
        <Link href={`/projects/${project.id}`}>
          <h3 className="title">{name}</h3>
        </Link>
        <p>{description}</p>
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
