import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppShell({ isSidebarCollapsed, toggleSidebar }) {
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
