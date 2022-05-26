import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CameraComp from "./components/CameraComp";
import WebCamComp from "./components/WebCamComp";
import MobileCamComp from "./components/MobileCamComp";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mobile" element={<MobileCamComp />} />
        <Route path="/webcam" element={<WebCamComp />} />
      </Routes>
    </Router>
  );
}

export default App;
