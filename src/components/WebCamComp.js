import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function WebCamComp() {
  const [image, setImage] = useState(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment",
  };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>

      {image && <img src={image} alt="taken" />}
    </>
  );
}

export default WebCamComp;
