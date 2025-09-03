import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TipsPage.css";

function TipsPage() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      const res = await axios.get("/api/tips");
      setTips(res.data);
    };
    fetchTips();
  }, []);

  return (
    <div className="tips-container">
      <h1 className="tips-heading">Preparation Tips</h1>
      <ul className="tips-list">
        {tips.map((tip, index) => (
          <li key={index} className="tips-item">{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default TipsPage;
