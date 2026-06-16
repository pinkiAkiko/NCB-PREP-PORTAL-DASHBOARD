import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Dashboard from './pages/applicants/Dashboard';
import MyUrns from './pages/applicants/MyUrns';
import ReturnsFiling from './pages/applicants/ReturnsFiling';
import PlaceholderScreen from './components/common/PlaceholderScreen';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />}>
          <Route index element={<Dashboard />} />
          
          <Route path="queries" element={<PlaceholderScreen title="My Queries" description="All open queries across URN applications, returns, change requests — coming next." />} />
          
          <Route path="urns">
            <Route index element={<MyUrns />} />
            <Route path="apply" element={<PlaceholderScreen title="Apply for New URN" parentTitle="My URNs" parentLink="/urns" description="This screen is up next. Pre-application checklist -> Form B (multi-step wizard) -> Submit." />} />
            <Route path="view" element={<PlaceholderScreen title="View URN Details" parentTitle="My URNs" parentLink="/urns" description="Detailed view of URN coming next." />} />
          </Route>
          
          <Route path="returns">
            <Route index element={<ReturnsFiling />} />
            <Route path="new" element={<PlaceholderScreen title="File New Return" parentTitle="Returns Filing" parentLink="/returns" description="Filing wizard coming next." />} />
          </Route>

          <Route path="substance">
            <Route index element={<PlaceholderScreen title="Substance Records" description="Stock overview and movement log — coming next." />} />
            <Route path="consignment" element={<PlaceholderScreen title="Generate Consignment Note" parentTitle="Substance Records" parentLink="/substance" description="Consignment generation wizard — coming next." />} />
            <Route path="destruction" element={<PlaceholderScreen title="Apply for Destruction" parentTitle="Substance Records" parentLink="/substance" description="Destruction application — coming next." />} />
          </Route>

          <Route path="loss-damage">
            <Route index element={<PlaceholderScreen title="Loss & Damage" description="Incident reporting and case tracking — coming next." />} />
            <Route path="report" element={<PlaceholderScreen title="Report Incident" parentTitle="Loss & Damage" parentLink="/loss-damage" description="Incident reporting form — coming next." />} />
          </Route>

          <Route path="profile" element={<PlaceholderScreen title="My Profile" description="Company details, contact info, password settings — coming next." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
