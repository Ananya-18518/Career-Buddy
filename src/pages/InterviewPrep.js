import React from "react";
import { useNavigate } from "react-router-dom";
import "./InterviewPrep.css";  // Import the CSS file

function InterviewPrep() {
  const navigate = useNavigate();

  return (
    <div className="interview-container">
      <h1 className="interview-heading">Interview Preparation Corner</h1>

      <div className="interview-grid">
        {/* Aptitude */}
        <div 
          onClick={() => navigate("/questions/aptitude")}
          className="interview-card"
        >
          <h2>Aptitude</h2>
          <p>Practice aptitude questions with step-by-step navigation.</p>
        </div>

        {/* Interview */}
        <div className="interview-card">
          <h2>Interview Questions</h2>
          <button 
            onClick={() => navigate("/questions/hr")}
            className="interview-btn"
          >
            HR Questions
          </button>
          <button 
            onClick={() => navigate("/questions/technical")}
            className="interview-btn"
          >
            Technical Questions
          </button>
        </div>

        {/* Tips */}
        <div 
          onClick={() => navigate("/tips")}
          className="interview-card"
        >
          <h2>Tips</h2>
          <p>Get quick preparation tips to boost your confidence.</p>
        </div>
      </div>
    </div>
  );
}

export default InterviewPrep;
