import React, { useState } from "react";
import { useGrid } from "../context/GridContext";
import "./Cell.css";

const Cell = () => {
  const { toggleCell } = useGrid();
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    toggleCell(isOn);
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div className={`cell ${isOn ? "on" : "off"}`} onClick={handleClick}></div>
  );
};

export default Cell;
