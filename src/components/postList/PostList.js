import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

function PostList(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  const renderList = () => {
    return props.posts.map((post) => {
      return (
        <div className="post" key={post.id}>
          <div className="post-author"></div>
          <div className="post-content">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
