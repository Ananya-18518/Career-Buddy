// import React , {useState } from 'react';           //usestate for dynamic data updataion
// import axios from 'axios';

// const Register = () =>{
//     const[formData, setformData] = useState({        
//         name : '',email :'', password : ''              //initialization
//     });


//     const handleChange = (e) =>{
//         setformData({...formData, [e.target.name]: e.target.value}); //clear theprevious from data, set new name and value
//     }; 

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/register', formData);
//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }


// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';   // 👈 css import

const Register = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <p className="register-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
