import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import { useRouter } from "next/router";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const SingleExploreProject = ({ project, projectSums }) => {
  const { image, description, startDate, name, target } = project;
  const amount = projectSums[project.id] || 0;
  const truncatedDescription = truncateText(description, 100);
  const progress = (amount / target) * 100;

  const router = useRouter();

  const navigateToProject = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div className="explore-projects-item mt-30" style={{ height: "400px" }}>
      <Image
        src={image}
        alt={name}
        style={{ height: "400px", width: "100%" }}
      />

      <div className="explore-projects-content">
        <div className="item d-flex align-items-center">
          <p>
            <i className="fa fa-clock-o"></i>{" "}
            {new Date(startDate).toLocaleDateString()}
          </p>
        </div>
        {/* <div onClick={navigateToProject} className="cursor-pointer"> */}
        <Link className="title" href={`/projects/${project.id}`}>
          {name}
        </Link>
        {/* </div> */}
        <div className="projects-range">
          <div className="projects-range-content">
            <ul>
              <li>Target:</li>
              <li>{target}</li>
            </ul>

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
                <p style={{ color: "white", textAlign: "center" }}>
                  {amount === 0 ? "" : amount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExploreProject;
