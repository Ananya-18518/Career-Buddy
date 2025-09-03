// import React from "react";
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import Home from './pages/Home';
// import AskAI from './components/AskAi';
// import Dashboard from './pages/Dashboard';
// import Navbar from './components/Navbar';
// import NotesPage from './pages/NotesPage';
// // import ResourceLibrary from './pages/ResourceLibrary';
// import InterviewPrep from "./pages/InterviewPrep";
// import QuestionPage from "./pages/QuestionPage";
// import TipsPage from "./pages/TipsPage";
// import './App.css';



// function App(){
//   return(
//     <Router>
//     <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/ask" element={<AskAI />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/notes" element={<NotesPage />} />
//         {/* <Route path="/resources" element={<ResourceLibrary />} /> */}
//         <Route path="/interview-prep" element={<InterviewPrep />} />
//         <Route path="/questions/:type" element={<QuestionPage />} />
//         <Route path="/tips" element={<TipsPage />} />
//       </Routes>
//     </Router>

//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/Home';
import AskAI from './components/AskAi';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import NotesPage from './pages/NotesPage';
// import ResourceLibrary from './pages/ResourceLibrary';
import InterviewPrep from "./pages/InterviewPrep";
import QuestionPage from "./pages/QuestionPage";
import TipsPage from "./pages/TipsPage";
import './App.css';

// Wrapper component for conditional Navbar
function Layout() {
  const location = useLocation();
  const hideNavbarOn = ["/", "/login", "/register"]; // jaha Navbar nahi chahiye

  return (
    <>
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ask" element={<AskAI />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<NotesPage />} />
        {/* <Route path="/resources" element={<ResourceLibrary />} /> */}
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/questions/:type" element={<QuestionPage />} />
        <Route path="/tips" element={<TipsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
