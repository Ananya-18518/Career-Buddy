// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/"><button>Home</button></Link> |{" "}
//       <Link to="/register"><button>Register</button></Link> |{" "}
//       <Link to="/login"><button>Login</button></Link> |{" "}
//       <Link to="/dashboard"><button>Dashboard</button></Link> |{" "}
//       <Link to="/ask"><button>Ask AI</button></Link> |{" "}
//       <Link to="/notes"><button>Career Notes</button></Link> |{" "}
//       <Link to="/resources"><button>Resource Library</button></Link> 
//       <Link to="/interview-prep"><button>Go to Interview Prep</button></Link>

//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/register"><button>Register</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/dashboard"><button>Dashboard</button></Link>
      <Link to="/ask"><button>Ask AI</button></Link>
      <Link to="/notes"><button>Create Notes</button></Link>
      {/* <Link to="/resources"><button>Resource Library</button></Link> */}
      <Link to="/interview-prep"><button>Interview Prep</button></Link>
    </nav>
  );
};

export default Navbar;
