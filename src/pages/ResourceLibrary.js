import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResourceLibrary() {
    const [resources, setResources] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '', link: '', category: '' });

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        const res = await axios.get('https://career-buddy-backend.onrender.com/api/resources');
        setResources(res.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://career-buddy-backend.onrender.com/api/resources', formData);
        setFormData({ title: '', description: '', link: '', category: '' });
        fetchResources();
    };

    const deleteResource = async (id) => {
        await axios.delete(`https://career-buddy-backend.onrender.com/api/resources${id}`);
        fetchResources();
    };

    return (
        <div>
            <h2>Career Resource Library</h2>

            <form onSubmit={handleSubmit}>
                <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
                <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <input name="link" value={formData.link} onChange={handleChange} placeholder="Link" />
                <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                <button type="submit">Add Resource</button>
            </form>

            <h3>All Resources</h3>
            <ul>
                {resources.map((r) => (
                    <li key={r._id}>
                        <strong>{r.title}</strong> - {r.description} - <a href={r.link} target="_blank" rel="noreferrer">Visit</a> ({r.category})
                        <button onClick={() => deleteResource(r._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResourceLibrary;
