import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import BoundingBox from './BoundingBox';
import './ImageViewer.css';

const ImageViewer = ({ image, boundingBoxes }) => {
  return (
    <div className="image-viewer">
      <TransformWrapper>
        <TransformComponent>
          <img src={image} alt="Whole Slide" className="wsi-image" />
          {boundingBoxes.map((box, index) => (
            <BoundingBox
              key={index}
              box={{
                x1: box[0],
                y1: box[1],
                x2: box[2],
                y2: box[3],
                label: box[4],
              }}
            />
          ))}
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ImageViewer;
