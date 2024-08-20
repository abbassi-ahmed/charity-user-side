import React, { useEffect, useState } from "react";
import SearchIcon from "@/components/Header/SearchIcon";
import Link from "@/components/Reuseable/Link";
import handleSubmit from "@/utils/handleSubmit";
import { Image } from "react-bootstrap";
import { blogDetailsSidebar } from "@/data/newsArea";

const { categories, tags } = blogDetailsSidebar;

const SidebarPostSingle = ({ post = {} }) => {
  const { image, title, id } = post;

  return (
    <div className="sidebar__post__single">
      <div className="sidebar__post-image">
        <div className="inner-block">
          <Image
            src={image}
            alt="Awesome Image"
            style={{ width: 150, height: 80, objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="sidebar__post-content">
        <h4 className="sidebar__post-title">
          <Link href={`/blog/${id}`}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

const BlogDetailsSidebar = ({ posts }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Other Posts</h3>
        <div className="sidebar__post-wrap">
          {posts.map((post) => (
            <SidebarPostSingle post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSidebar;
