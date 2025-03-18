import React from 'react';
import './BoundingBox.css';

const BoundingBox = ({ box }) => {
  const { x1, y1, x2, y2, label } = box;

  return (
    <div
      className="bounding-box"
      style={{
        left: `${x1}px`,
        top: `${y1}px`,
        width: `${x2 - x1}px`,
        height: `${y2 - y1}px`,
      }}
      title={label}
    >
      {label}
    </div>
  );
};

export default BoundingBox;
