import React from 'react';
import logo from '../../assets/logo.png';

export default function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
        <img src={logo} alt="PREP Logo" className="header-logo" style={{ background: 'transparent', padding: '2px' }} />
        <div>
          <div className="header-title">PREP Portal &nbsp;·&nbsp; Precursor Register &amp; Evaluation Portal</div>
          <div className="header-subtitle">Narcotics Control Bureau &nbsp;|&nbsp; Ministry of Home Affairs, Government of India</div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-icon-btn">
          [&#9679;] Notifications
          <span className="notif-badge">3</span>
        </div>
        <div className="header-icon-btn">[?] Help</div>
        <div className="header-user">
          <div className="user-avatar">RK</div>
          <div>
            <div className="user-name">Rajesh Kumar</div>
            <div className="user-role-label">Company Admin &nbsp;·&nbsp; ABC Pharmaceuticals Ltd.</div>
          </div>
          <span style={{ color: '#4A5A6A', marginLeft: '4px', fontSize: '10px' }}>&#9660;</span>
        </div>
      </div>
    </header>
  );
}
