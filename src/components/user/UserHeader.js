import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

function UserHeader(props) {
  console.log(props.userId);
  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);
  return <div className="post-author">UserHeader</div>;
}

export default connect(null, { fetchUser })(UserHeader);
