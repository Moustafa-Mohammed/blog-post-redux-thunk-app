import React from "react";

import "./postdetails.css";

function PostDetails({ post }) {
  return (
    <div className="post">
      <div className="post-author">Picture</div>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetails;
