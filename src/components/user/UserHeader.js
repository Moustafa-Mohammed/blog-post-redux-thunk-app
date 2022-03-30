import React from "react";
import { connect } from "react-redux";

function UserHeader(props) {
  if (!props.user) {
    return <div></div>;
  }
  return <div className="post-author">{props.user.name}</div>;
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === props.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
