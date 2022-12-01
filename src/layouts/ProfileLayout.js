import React from "react";
import Profile from "../components/Profile";

const STYLES = {
  profile: {
    backgroundColor: "#DEF5E5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ProfileLayout = () => {
  return (
    <div style={STYLES.profile}>
      <Profile />
    </div>
  );
};

export default ProfileLayout;
