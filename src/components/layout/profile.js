import React, { useEffect } from "react";
import connect from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profile";

const Profile = ({ getCurrentProfile, isAuthenticated, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  });
  return <div>profile page</div>;
};

Profile.PropTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Profile);
