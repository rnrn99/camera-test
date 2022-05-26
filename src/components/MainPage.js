import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>MainPage</div>
      <button onClick={() => navigate("/mobile")}>폰 카메라 연결</button>
      <button onClick={() => navigate("/webcam")}>웹캠 연결</button>
    </>
  );
}

export default MainPage;
