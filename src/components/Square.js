import React from "react";

const style = {
  background: "skyblue",
  border: "2px solid purple",
  fontSize: "2rem",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
