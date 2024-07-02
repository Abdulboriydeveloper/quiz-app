import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import QuizPage from "./components/quiz";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
        <Contact/>
      </div>
    </Router>
  );
};

export default App;