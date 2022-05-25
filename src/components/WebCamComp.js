import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";

function WebCamComp() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
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
    </>
  );
}

export default WebCamComp;
