import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="screen">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        &nbsp;&#8250;&nbsp; <span>Dashboard</span>
      </div>

      <div className="page-header">
        <div>
          <div className="page-greeting">Good morning, Rajesh Kumar</div>
          <div className="page-sub">ABC Pharmaceuticals Ltd. &nbsp;·&nbsp; Mumbai Zonal Office Jurisdiction</div>
        </div>
        <div className="page-session">
          Last login: 15 Jun 2026, 06:30 PM
        </div>
      </div>

      <div className="kpi-row">
        <Link to="/urns" className="kpi-card" style={{ borderTopColor: '#2E6EBF' }}>
          <div className="kpi-label">Active URNs</div>
          <div className="kpi-value" style={{ color: '#1A2332' }}>2</div>
          <div className="kpi-note" style={{ color: '#5A6474' }}>Both under Mumbai Zone</div>
          <div className="kpi-cta">View My URNs &rarr;</div>
        </Link>
        <Link to="/queries" className="kpi-card" style={{ borderTopColor: '#C0392B' }}>
          <div className="kpi-label">Pending Queries</div>
          <div className="kpi-value" style={{ color: '#C0392B' }}>3</div>
          <div className="kpi-note" style={{ color: '#C0392B' }}>&#9888; Response required</div>
          <div className="kpi-cta" style={{ color: '#C0392B' }}>Respond now &rarr;</div>
        </Link>
        <Link to="/returns" className="kpi-card" style={{ borderTopColor: '#B7751D' }}>
          <div className="kpi-label">Q1 2026 Return Due</div>
          <div className="kpi-value" style={{ color: '#B7751D' }}>5 days</div>
          <div className="kpi-note" style={{ color: '#B7751D' }}>&#9873; Deadline: 21 Jun 2026</div>
          <div className="kpi-cta" style={{ color: '#B7751D' }}>File now &rarr;</div>
        </Link>
        <Link to="/loss-damage" className="kpi-card" style={{ borderTopColor: '#1E7B4B' }}>
          <div className="kpi-label">Open Incidents</div>
          <div className="kpi-value" style={{ color: '#1E7B4B' }}>0</div>
          <div className="kpi-note" style={{ color: '#1E7B4B' }}>&#10003; No active incidents</div>
          <div className="kpi-cta">View history &rarr;</div>
        </Link>
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="section-hd">
            <div className="section-title">Alerts &amp; Notifications</div>
            <div className="section-link">View all &rarr;</div>
          </div>
          <div className="notif-item">
            <div className="notif-indicator" style={{ background: '#C0392B' }}></div>
            <div className="notif-body">
              <div className="notif-tag" style={{ background: '#FDECEA', color: '#C0392B' }}>Urgent</div>
              <div className="notif-text">Q1 2026 Quarterly Return (Form E) due in <strong>5 days</strong> — Deadline: 21 Jun 2026. Applies to both active URNs.</div>
              <div className="notif-meta">Today, 09:00 AM &nbsp;·&nbsp; Automated reminder</div>
            </div>
          </div>
          <div className="notif-item">
            <div className="notif-indicator" style={{ background: '#C0392B' }}></div>
            <div className="notif-body">
              <div className="notif-tag" style={{ background: '#FDECEA', color: '#C0392B' }}>Action Required</div>
              <div className="notif-text">Query raised on Application <strong>PREP/ZO-MH/2026/00142</strong> (Acetic Anhydride) by Zonal Reviewer — response pending.</div>
              <div className="notif-meta">13 Jun 2026, 3 days ago &nbsp;·&nbsp; Zonal Office, Mumbai</div>
            </div>
          </div>
          <div className="notif-item">
            <div className="notif-indicator" style={{ background: '#B7751D' }}></div>
            <div className="notif-body">
              <div className="notif-tag" style={{ background: '#FEF3E2', color: '#B7751D' }}>Action Required</div>
              <div className="notif-text">Q1 2026 Return (Form E) for URN <strong>PREP/ZO-MH/2026/00089</strong> (Ephedrine) is pending submission.</div>
              <div className="notif-meta">10 Jun 2026, 6 days ago &nbsp;·&nbsp; Automated</div>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="section-hd">
            <div className="section-title">Pending Actions</div>
            <div style={{ fontSize: '10px', color: '#C0392B', fontWeight: 700 }}>3 items require your attention</div>
          </div>
          <div className="action-item">
            <div className="action-status-badge" style={{ background: '#FDECEA', color: '#C0392B' }}>Overdue &nbsp;·&nbsp; 3 Days</div>
            <div className="action-title">Respond to query — URN Application</div>
            <div className="action-meta">
              Application PREP/ZO-MH/2026/00142 &nbsp;·&nbsp; Acetic Anhydride<br />
              Raised by Zonal Reviewer on 13 Jun 2026<br />
              <em>Application cannot progress until resolved.</em>
            </div>
            <button className="action-btn">View Query &amp; Respond &rarr;</button>
          </div>
          <div className="action-item">
            <div className="action-status-badge" style={{ background: '#FEF3E2', color: '#B7751D' }}>Due in 5 Days &nbsp;·&nbsp; 21 Jun 2026</div>
            <div className="action-title">File Q1 2026 Quarterly Return — Form E</div>
            <div className="action-meta">
              URN PREP/ZO-MH/2026/00142 &nbsp;·&nbsp; Acetic Anhydride<br />
              Quarter: Jan – Mar 2026 &nbsp;·&nbsp; Manufacturer return
            </div>
            <button className="action-btn">Begin Filing &rarr;</button>
          </div>
          <div className="action-item">
            <div className="action-status-badge" style={{ background: '#FEF3E2', color: '#B7751D' }}>Due in 5 Days &nbsp;·&nbsp; 21 Jun 2026</div>
            <div className="action-title">File Q1 2026 Quarterly Return — Form E</div>
            <div className="action-meta">
              URN PREP/ZO-MH/2026/00089 &nbsp;·&nbsp; Ephedrine<br />
              Quarter: Jan – Mar 2026 &nbsp;·&nbsp; Manufacturer return
            </div>
            <button className="action-btn">Begin Filing &rarr;</button>
          </div>
        </div>
      </div>

      <div className="quick-section">
        <div className="section-title">Quick Actions</div>
        <div className="quick-grid">
          <Link to="/urns/apply" className="quick-tile">
            <div className="quick-icon">+U</div>
            <div className="quick-label">Apply for New URN</div>
          </Link>
          <Link to="/returns" className="quick-tile">
            <div className="quick-icon">RF</div>
            <div className="quick-label">File Quarterly Return</div>
          </Link>
          <Link to="/substance/consignment" className="quick-tile">
            <div className="quick-icon">CN</div>
            <div className="quick-label">Generate Consignment Note</div>
          </Link>
          <Link to="/loss-damage/report" className="quick-tile">
            <div className="quick-icon">!!</div>
            <div className="quick-label">Report Loss / Damage</div>
          </Link>
        </div>
      </div>

      <div className="urn-section">
        <div className="section-hd">
          <div className="section-title">My Active URNs</div>
          <Link to="/urns" className="section-link">View all &rarr;</Link>
        </div>
        <table className="urn-table">
          <thead>
            <tr>
              <th>URN Number</th>
              <th>Controlled Substances</th>
              <th>Registered Purpose</th>
              <th>Zonal Office</th>
              <th>Date Issued</th>
              <th>Status</th>
              <th>Q1 2026 Returns</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PREP/ZO-MH/2026/00142</strong></td>
              <td>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ display: 'inline-block', background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 6px', fontSize: '10px', fontWeight: 600, width: 'fit-content' }}>Acetic Anhydride</span>
                  <span style={{ display: 'inline-block', background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 6px', fontSize: '10px', fontWeight: 600, width: 'fit-content' }}>Ephedrine</span>
                </div>
              </td>
              <td>Manufacture, Sale, Storage</td>
              <td>Mumbai Zone</td>
              <td>15 Feb 2026</td>
              <td><span className="status-pill" style={{ background: '#EAF5EE', color: '#1E7B4B' }}>&#9679; Active</span></td>
              <td><span className="status-pill" style={{ background: '#FEF3E2', color: '#B7751D' }}>2 pending</span><span className="urn-due">Due 21 Jun</span></td>
              <td>
                <div className="row-actions">
                  <Link to="/urns/view" className="rlink">View</Link>
                  <span className="rsep">|</span>
                  <span className="rlink">Request Change</span>
                  <span className="rsep">|</span>
                  <span className="rlink off" data-tip="Stock must be nil to surrender">Surrender</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>PREP/ZO-MH/2025/00089</strong></td>
              <td>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ display: 'inline-block', background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 6px', fontSize: '10px', fontWeight: 600, width: 'fit-content' }}>Pseudoephedrine</span>
                </div>
              </td>
              <td>Purchase, Storage, Consumption</td>
              <td>Mumbai Zone</td>
              <td>03 Nov 2025</td>
              <td><span className="status-pill" style={{ background: '#EAF5EE', color: '#1E7B4B' }}>&#9679; Active</span></td>
              <td><span className="status-pill" style={{ background: '#FEF3E2', color: '#B7751D' }}>1 pending</span><span className="urn-due">Due 21 Jun</span></td>
              <td>
                <div className="row-actions">
                  <Link to="/urns/view" className="rlink">View</Link>
                  <span className="rsep">|</span>
                  <span className="rlink">Request Change</span>
                  <span className="rsep">|</span>
                  <span className="rlink off" data-tip="Stock must be nil to surrender">Surrender</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="spacer"></div>
    </div>
  );
}
