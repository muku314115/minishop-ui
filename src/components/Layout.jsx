import React from 'react';
import Sidebar from './Sidebar.jsx';
import TopBar from './TopBar.jsx';

export default function Layout({ currentPage, onNavigate, children }) {
  return (
    <div className="app-layout">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="main-wrapper">
        <TopBar />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
