import React, { useContext } from "react";
import { AuthContext } from "./authcontext/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p>You are not logged in.</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
