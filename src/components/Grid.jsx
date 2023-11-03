// Grid.js
import React from "react";
import { useGrid } from "../context/GridContext";
import Cell from "./Cell/";
import "./Grid.css";

const Grid = () => {
  const { onCount } = useGrid();

  return (
    <div className='container'>
      <h2>Count: {onCount}</h2>
      <div className='flex'>
        <div className='grid'>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
};

export default Grid;
