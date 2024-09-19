import React from "react";
import { blog } from "./products";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className=" text-gray-500">
        Present Posts in a best way to Highlight Interesting Events of your
        Blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-8 gap-8">
        {blog.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
