import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">Note 1</a>
        </li>
        <li>
          <a href="#">Note 2</a>
        </li>
        <li>
          <a href="#">Note 3</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
