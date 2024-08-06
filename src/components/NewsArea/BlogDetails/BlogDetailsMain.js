import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const BlogDetailsMain = ({ blog }) => {
  const { image, createdAt, admin, title, content, tags } = blog;

  return (
    <div className="blog-details__main">
      <div
        className="blog-details__image"
        style={{ width: "100%", height: "400px" }}
      >
        <Image
          src={image}
          alt="thumb"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="blog-details__content">
        <span>{new Date(createdAt).toLocaleDateString()}</span>
        <div className="blog-one__meta">
          <a href="#">
            <i className="fa fa-user-o"></i>{" "}
            {`${admin.firstName} ${admin.lastName}`}
          </a>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      {/* <div className="blog-details__meta">
        <div className="blog-details__tags">
          <span>Admin:</span>
          {tags &&
            tags.map((tag, i) => (
              <Fragment key={i}>
                <a href="#">{tag},</a>{" "}
              </Fragment>
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default BlogDetailsMain;
