import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function CameraComp() {
  const [images, setImages] = useState([]);

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log(dataUri);
    const newImages = [...images];
    newImages.push(dataUri);
    setImages(newImages);
  }

  const onTakePhotoHandler = (dataUri) => {
    handleTakePhoto(dataUri);
  };

  return (
    <>
      <Camera
        onTakePhoto={onTakePhotoHandler}
        idealFacingMode="environment"
        isImageMirror={false}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {images.map((image, index) => (
          <div key={index} style={{ width: "150px", paddingRight: "12px" }}>
            <img alt="cam" src={image} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CameraComp;
