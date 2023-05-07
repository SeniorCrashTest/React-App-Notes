import React from 'react';
import Workspace from './components/Workspace';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Workspace />
    </div>
  );
}

export default App;
