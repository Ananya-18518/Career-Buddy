// src/components/ViewNotes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewNotes.css';

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(null);
  const [updatedNote, setUpdatedNote] = useState({ title: '', content: '' });

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/notes', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (note) => {
    setEditing(note._id);
    setUpdatedNote({ title: note.title, content: note.content });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/notes/${editing}`, updatedNote, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditing(null);
      setUpdatedNote({ title: '', content: '' });
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

 return (
  <div className="notes-container">
    <h4 className="all-saved-heading">All Saved Notes</h4>

    <div className="notes-list">
      {notes.map((note) => (
        <div key={note._id} className="note-box">
          {editing === note._id ? (
            <div>
              <input
                className="note-input"
                value={updatedNote.title}
                onChange={(e) => setUpdatedNote({ ...updatedNote, title: e.target.value })}
              />
              <textarea
                className="note-textarea"
                value={updatedNote.content}
                onChange={(e) => setUpdatedNote({ ...updatedNote, content: e.target.value })}
              />
              <div className="btn-group">
                <button className="btn" onClick={handleUpdate}>Save</button>
                <button className="btn" onClick={() => setEditing(null)}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <h4>{note.title}</h4>
              <p>{note.content}</p>
              <div className="btn-group">
                <button className="btn" onClick={() => handleEdit(note)}>Edit</button>
                <button className="btn" onClick={() => handleDelete(note._id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

};

export default ViewNotes;
