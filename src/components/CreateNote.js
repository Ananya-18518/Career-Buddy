// // src/components/CreateNote.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateNote = () => {
//   const [note, setNote] = useState({ title: '', content: '' });

//   const handleAdd = async () => {
//     if (!note.title || !note.content) return alert("Both fields required");
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/notes', note, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setNote({ title: '', content: '' });
//       alert("Note added successfully!");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h3>Create a New Note</h3>
//       <input
//         type="text"
//         placeholder="Title"
//         value={note.title}
//         onChange={(e) => setNote({ ...note, title: e.target.value })}
//       />
//       <br />
//       <textarea
//         placeholder="Content"
//         value={note.content}
//         onChange={(e) => setNote({ ...note, content: e.target.value })}
//       />
//       <br />
//       <button onClick={handleAdd}>Add Note</button>
//     </div>
//   );
// };

// export default CreateNote;


import React, { useState } from 'react';
import axios from 'axios';
import './CreateNote.css';   // new css file

const CreateNote = () => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleAdd = async () => {
    if (!note.title || !note.content) return alert("Both fields required");
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://career-buddy-backend-3.onrender.com/api/notes', note, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNote({ title: '', content: '' });
      alert("Note added successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="note-container">
      <div className="note-card">
        <h2>Create a New Note</h2>
        <input
          type="text"
          placeholder="Title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        />
        <button onClick={handleAdd}>Add Note</button>
      </div>
    </div>
  );
};

export default CreateNote;
