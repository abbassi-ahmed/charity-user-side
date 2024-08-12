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

const BlogDetailsSidebar = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3636/blogs/find-all");
        const data = await response.json();
        // Sorted posts by createdAt date in descending order
        const sortedPosts = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent Posts</h3>
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
