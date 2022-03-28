import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

function UserHeader(props) {
  console.log(props);
  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);

  const user = props.users.find((user) => user.id === props.userId);

  if (!user) {
    return <div></div>;
  }
  return <div className="post-author">{user.name}</div>;
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
