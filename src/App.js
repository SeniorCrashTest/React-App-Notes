import React from 'react';
import Workspace from './components/workspace/Workspace';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';


function App() {
  return (
    <div className="app-container">
      <Header className="Header" />
      <Sidebar className="sidebar" />
      <Workspace className="workspace" />
    </div>
  );
}

export default App;
