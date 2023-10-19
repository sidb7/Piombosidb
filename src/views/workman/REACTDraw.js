import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const REACTDraw = () => {
  const canvas = useRef(null);

  const exportImage = () => {
    canvas.current
      .exportImage("png")
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <ReactSketchCanvas ref={canvas} strokeWidth={5} strokeColor="black" />
      <button onClick={exportImage}>Get Image</button>
    </div>
  );
};

export default REACTDraw;
