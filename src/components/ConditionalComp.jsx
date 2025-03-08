import React from "react";

const ConditionalComp = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <h1>Welcome, User!</h1> : <h1>Please Log In</h1>;
};

export default ConditionalComp;
