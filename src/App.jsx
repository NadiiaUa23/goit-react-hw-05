// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// подключить peges
import {useParams} from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/
          <Route path="/movies" element={<Movies />}/>
         <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
