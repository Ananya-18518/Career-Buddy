import React from "react";
import { useNavigate } from "react-router-dom";

export default function InterviewQuestions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Interview Questions</h1>
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/interview-questions/hr")}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition"
        >
          HR Questions
        </button>
        <button
          onClick={() => navigate("/interview-questions/technical")}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
        >
          Technical Questions
        </button>
      </div>
    </div>
  );
}
