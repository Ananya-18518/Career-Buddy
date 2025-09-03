import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to CareerBuddy 🎓</h1>
      <p className="home-subtitle">
        Your all-in-one platform for interview preparation, notes, resources, and career guidance 🚀
      </p>

      <div className="home-buttons">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">
//       <div className="text-center p-10 max-w-xl bg-white shadow-2xl rounded-2xl border border-gray-200">
//         {/* App Title */}
//         <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
//           Welcome to CareerBuddy 🎓
//         </h1>

//         {/* Short Description */}
//         <p className="text-gray-600 text-lg mb-8">
//           Your all-in-one platform for interview preparation, notes, resources,
//           and career guidance. Let’s make your journey smooth and successful 🚀
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-6 justify-center">
//           <Link
//             to="/login"
//             className="px-6 py-3 text-lg font-semibold rounded-xl shadow-md bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="px-6 py-3 text-lg font-semibold rounded-xl shadow-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
