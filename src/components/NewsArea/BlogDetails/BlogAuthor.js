import React from "react";
import { Image } from "react-bootstrap";

const BlogAuthor = ({ author }) => {
  const { avatar, firstName, lastName, bio } = author;

  return (
    <div className="blog-author">
      <div className="blog-author__image">
        <Image src={avatar} alt="author" />
      </div>
      <div className="blog-author__content">
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
