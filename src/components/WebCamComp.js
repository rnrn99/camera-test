import React, { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

function WebCamComp() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment",
  };

  const webcamRef = useRef(null);
  const imageRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  useEffect(() => {
    if (image) {
      const blob = new Blob([image], {
        type: "image/jpeg",
      });
      console.log(blob);
      const newUrl = URL.createObjectURL(blob);
      setUrl(newUrl);
    }
  }, [image]);

  useEffect(() => {
    if (url) {
      imageRef.current.src = url;
    }
  }, [url]);

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
      {url && <img alt="url convert" ref={imageRef} width="300" />}
    </>
  );
}

export default WebCamComp;
