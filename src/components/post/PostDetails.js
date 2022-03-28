import React from "react";
import UserHeader from "../user/UserHeader";

import "./postdetails.css";

function PostDetails({ post }) {
  return (
    <div className="post">
      <div className="user-photo">User Picture</div>
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p>{post.body}</p>
        <UserHeader userId={post.userId} />
      </div>
    </div>
  );
}

export default PostDetails;
