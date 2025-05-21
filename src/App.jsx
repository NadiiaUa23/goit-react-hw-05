// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {HomePege} from "../srs/peges/Homepege.jsc"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          
          <Route path="/movies" element={<Movies />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
