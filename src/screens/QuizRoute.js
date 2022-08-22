import React from "react";
import Quiz from "./components/Quiz";
import PlayQuiz from "./components/PlayQuiz";
import "../App.css";
import { Route, Routes } from "react-router-dom";

export default function QuizRoute() {
  return (
    <div className="app-main">
      <Routes>
        <Route exact path="/" element={<Quiz />} />
        <Route exact path="/play" element={<PlayQuiz />} />
        {/* <Route exact path="/results" element={<Results />} /> */}
      </Routes>
    </div>
  );
}
