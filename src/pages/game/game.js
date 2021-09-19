import React from "react";
import "./game.css";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { name } = useParams();
  return (
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Game: {name}</small>
    </div>
  );
};

export default GamePage;