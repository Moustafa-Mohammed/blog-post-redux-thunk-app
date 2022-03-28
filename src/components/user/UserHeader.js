import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

function UserHeader(props) {
  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);

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

export default connect(mapStateToProps, { fetchUser })(UserHeader);
