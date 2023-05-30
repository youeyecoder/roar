import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./PagesComponent/Home";
import { Bikes } from "./PagesComponent/Bikes";
import { Cars } from "./PagesComponent/Cars";
import { Header } from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bikes" element={<Bikes />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
    </>
  );
}

export default App;
