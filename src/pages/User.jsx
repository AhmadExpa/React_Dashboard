import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  return (
    <div>
      <h1>User: {useParams().id}</h1>
    </div>
  );
};

export default User;
