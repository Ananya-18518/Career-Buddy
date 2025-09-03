import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./QuestionPage.css";

function QuestionPage() {
  const { type } = useParams(); // aptitude | hr | technical
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      let url = "";
      if (type === "aptitude") url = "/api/aptitude";
      else if (type === "hr") url = "/api/interview/hr";
      else if (type === "technical") url = "/api/interview/technical";

      const res = await axios.get(url);
      setQuestions(res.data);
    };
    fetchQuestions();
  }, [type]);

  const handleNext = () => {
    if (!completed.includes(currentIndex)) {
      setCompleted([...completed, currentIndex]);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/interview-prep"); // redirect on Finish
    }
  };

  return (
    <div className="question-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-heading">Completed Questions</h2>
        <ul>
          {completed.map((idx) => (
            <li key={idx} className="completed-item">
              <span className="tick">✔</span> {questions[idx]}
            </li>
          ))}
        </ul>
      </div>

      {/* Question Area */}
      <div className="main-content">
        {questions.length > 0 ? (
          <>
            <h2 className="question-text">{questions[currentIndex]}</h2>
            <button onClick={handleNext} className="next-btn">
              {currentIndex < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </>
        ) : (
          <p>Loading questions...</p>
        )}
      </div>
    </div>
  );
}

export default QuestionPage;
