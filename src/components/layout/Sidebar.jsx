import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isCollapsed }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const NavItem = ({ to, icon, label, badge, tooltip, subItems, menuKey }) => {
    const isOpen = openMenus[menuKey];
    
    return (
      <>
        <NavLink 
          to={to} 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={() => {
            if (menuKey) toggleMenu(menuKey);
          }}
        >
          <div className="nav-icon">{icon}</div>
          <span className="nav-label">{label}</span>
          {badge && <span className="nav-badge">{badge}</span>}
          {subItems && <span className={`nav-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>}
          <span className="nav-tooltip">{tooltip || label}</span>
        </NavLink>
        
        {subItems && isOpen && (
          <div className="nav-sub-group">
            {subItems.map((sub, idx) => (
              <NavLink key={idx} to={sub.to} className="nav-sub">
                <span className="nav-sub-dot"></span> {sub.label}
              </NavLink>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} id="sidebar">
      <div className="sidebar-entity">
        <div className="sidebar-collapsed-avatar">ABC</div>
        <div className="sidebar-entity-name">ABC Pharmaceuticals Ltd.</div>
        <div className="sidebar-entity-sub">CIN: U24231MH2010PLC204896</div>
        <div className="sidebar-urn-chip"><span className="urn-dot"></span> 2 Active URNs</div>
      </div>

      <div className="sidebar-scroll">
        <div className="nav-group-label">Main Menu</div>

        <NavItem to="/" icon="#" label="Dashboard" />
        <NavItem to="/queries" icon="Q" label="My Queries" badge="3" />
        
        <NavItem 
          to="/urns"
          icon="U" 
          label="My URNs" 
          menuKey="myUrns"
          subItems={[
            { label: 'Apply for New URN', to: '/urns/apply' }
          ]} 
        />

        <NavItem 
          to="/returns"
          icon="R" 
          label="Returns Filing" 
          badge="1 Due"
          menuKey="returns"
          subItems={[
            { label: 'File New Return', to: '/returns/new' }
          ]} 
        />

        <NavItem 
          to="/substance"
          icon="S" 
          label="Substance Records" 
          menuKey="substance"
          subItems={[
            { label: 'Generate Consignment Note', to: '/substance/consignment' },
            { label: 'Apply for Destruction', to: '/substance/destruction' }
          ]} 
        />

        <NavItem 
          to="/loss-damage"
          icon="!" 
          label="Loss & Damage" 
          menuKey="loss"
          subItems={[
            { label: 'Report Incident', to: '/loss-damage/report' }
          ]} 
        />

        <div className="nav-group-label">Account</div>
        <NavItem to="/profile" icon="P" label="My Profile" />
      </div>

      <div className="sidebar-note">
        Form C / D (Daily Register) is inactive until NCB activates it following the RCS Order 2013 amendment.
      </div>
    </aside>
  );
}
