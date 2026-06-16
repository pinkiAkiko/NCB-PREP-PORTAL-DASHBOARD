import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppShell() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="app-shell">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}
