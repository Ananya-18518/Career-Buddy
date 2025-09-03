// import React, { useState } from 'react';
// import axios from 'axios';

// const AskAI = () => {
//   const [question, setQuestion] = useState('');
//   const [reply, setReply] = useState('');

//   const handleAsk = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/ai/ask', { question });
//       setReply(res.data.reply);
//     } catch (err) {
//       setReply("Error getting response.");
//     }
//   };

//   return (
//     <div>
//       <h2>Ask CareerBuddy (AI)</h2>
//       <form onSubmit={handleAsk}>
//         <textarea
//           rows="4"
//           placeholder="Ask any career-related question..."
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           required
//         ></textarea>
//         <br />
//         <button type="submit">Ask</button>
//       </form>
//       {reply && (
//         <div>
//           <h4>AI Response:</h4>
//           <p>{reply}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AskAI;
import React, { useState } from 'react';
import axios from 'axios';
import './AskAI.css';   // new css file

const AskAI = () => {
  const [question, setQuestion] = useState('');
  const [reply, setReply] = useState('');

  const handleAsk = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/ai/ask', { question });
      setReply(res.data.reply);
    } catch (err) {
      setReply("Error getting response.");
    }
  };

  return (
    <div className="askai-container">
      <div className="askai-card">
        <h2>Ask CareerBuddy (AI)</h2>
        <form onSubmit={handleAsk}>
          <textarea
            rows="4"
            placeholder="Ask any career-related question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
          <button type="submit">Ask</button>
        </form>
        {reply && (
          <div className="reply-box">
            <h4>AI Response:</h4>
            <p>{reply}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAI;
