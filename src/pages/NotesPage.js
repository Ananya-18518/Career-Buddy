// // src/pages/NotesPage.js
// import React, { useState } from 'react';
// import CreateNote from '../components/CreateNote';
// import ViewNotes from '../components/ViewNotes';

// const NotesPage = () => {
//   const [show, setShow] = useState('create');

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 className='note-title'>Career Notes</h2>
//       <div style={{ marginBottom: '20px' }}>
//         <button onClick={() => setShow('create')}>Create Note</button>
//         <br></br>
//         <br></br>
//         <button onClick={() => setShow('view')} style={{ marginLeft: '10px' }}>View All Notes</button>
//       </div>
//       {show === 'create' && <CreateNote />}
//       {show === 'view' && <ViewNotes />}
//     </div>
//   );
// };

// export default NotesPage;
// src/pages/NotesPage.js
import React, { useState } from 'react';
import CreateNote from '../components/CreateNote';
import ViewNotes from '../components/ViewNotes';

const NotesPage = () => {
  const [show, setShow] = useState('create');

  return (
    <div className="note-container">
      {/* Top bar with buttons right side */}
      <div className="note-topbar">
        {/* <h2 className="note-title">Career Notes</h2> */}
        <div className="note-buttons">
          <button onClick={() => setShow('create')}>Create Note</button>
          <button onClick={() => setShow('view')}>View All Notes</button>
        </div>
      </div>

      {/* Content */}
      {show === 'create' && <CreateNote />}
      {show === 'view' && <ViewNotes />}
    </div>
  );
};

export default NotesPage;
