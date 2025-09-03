// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '', password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));
//       alert("Login successful!");
//       navigate('/dashboard');
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';   // yaha CSS import kiya

const Login = () => {
  const [formData, setFormData] = useState({
    email: '', password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert("Login successful!");
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            onChange={handleChange} 
            required 
            className="login-input"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
            onChange={handleChange} 
            required 
            className="login-input"
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="login-footer">Don’t have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
