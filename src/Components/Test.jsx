/* eslint-disable no-unused-vars */
import React from "react";
import img from "../assets/slider2.png";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

const Test = () => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <Controls />
          <TransformComponent>
            <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
              <img 
                src={img} 
                alt="test" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
                Example text
              </div>
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default Test;
