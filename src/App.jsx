import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFoundComponent from "./Pages/404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFoundComponent />} />
      </Routes>
    </>
  );
}

export default App;
