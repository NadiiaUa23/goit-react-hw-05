// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          
          <Route path="/movies" element={<Movies />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
