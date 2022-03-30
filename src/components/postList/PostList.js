import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../../actions";
import PostDetails from "../post/PostDetails";

function PostList(props) {
  useEffect(() => {
    props.fetchPostsAndUsers();
  }, []);
  const renderList = () => {
    return props.posts.map((post) => {
      return <PostDetails key={post.id} post={post} />;
    });
  };

  return <div>{renderList()}</div>;
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
