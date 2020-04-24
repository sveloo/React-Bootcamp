import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts, deletePost }) => (
  <article className="posts container">
    <h1>Posts</h1>
    <ul>
      {posts.length < 1 && <li key="empty">There are no posts!</li>}
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            <Link to={`/edit/${post.slug}`}>Edit</Link>
            {" | "}
            <button className="linkLike" onClick={() => deletePost(post)}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  </article>
);

export default Posts;
