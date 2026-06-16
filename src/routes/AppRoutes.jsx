import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';

import Dashboard from '../pages/applicants/Dashboard';
import MyUrns from '../pages/applicants/MyUrns';
import ReturnsFiling from '../pages/applicants/ReturnsFiling';
import MyQueries from '../pages/applicants/MyQueries';
import ApplyUrn from '../pages/applicants/ApplyUrn';
import ViewUrn from '../pages/applicants/ViewUrn';
import NewReturn from '../pages/applicants/NewReturn';
import SubstanceRecords from '../pages/applicants/SubstanceRecords';
import ConsignmentNote from '../pages/applicants/ConsignmentNote';
import ApplyDestruction from '../pages/applicants/ApplyDestruction';
import LossDamage from '../pages/applicants/LossDamage';
import ReportIncident from '../pages/applicants/ReportIncident';
import MyProfile from '../pages/applicants/MyProfile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Dashboard />} />
        
        <Route path="queries" element={<MyQueries />} />
        
        <Route path="urns">
          <Route index element={<MyUrns />} />
          <Route path="apply" element={<ApplyUrn />} />
          <Route path="view" element={<ViewUrn />} />
        </Route>
        
        <Route path="returns">
          <Route index element={<ReturnsFiling />} />
          <Route path="new" element={<NewReturn />} />
        </Route>

        <Route path="substance">
          <Route index element={<SubstanceRecords />} />
          <Route path="consignment" element={<ConsignmentNote />} />
          <Route path="destruction" element={<ApplyDestruction />} />
        </Route>

        <Route path="loss-damage">
          <Route index element={<LossDamage />} />
          <Route path="report" element={<ReportIncident />} />
        </Route>

        <Route path="profile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}
