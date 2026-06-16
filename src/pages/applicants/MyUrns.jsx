import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyUrns() {
  const [activeTab, setActiveTab] = useState('all');

  const urns = [
    {
      id: 'PREP/ZO-MH/2026/00142',
      date: '15 Feb 2026',
      substances: ['Acetic Anhydride', 'Ephedrine'],
      purpose: 'Manufacture, Sale, Storage',
      zone: 'Mumbai Zone',
      status: 'Active',
      returnsPending: 2,
      returnsDesc: 'One per substance · Due 21 Jun',
      type: 'active'
    },
    {
      id: 'PREP/ZO-MH/2025/00089',
      date: '03 Nov 2025',
      substances: ['Pseudoephedrine'],
      purpose: 'Purchase, Storage, Consumption',
      zone: 'Mumbai Zone',
      status: 'Active',
      returnsPending: 1,
      returnsDesc: 'Due 21 Jun 2026',
      type: 'active'
    },
    {
      id: 'Application PREP/ZO-MH/2026/APP-019',
      date: 'Submitted 10 Jun 2026',
      substances: ['Acetic Anhydride', 'Potassium Permanganate'],
      purpose: 'Manufacture, Storage',
      zone: 'Mumbai Zone',
      status: 'Under Review',
      returnsPending: 0,
      returnsDesc: 'Not applicable',
      type: 'pending'
    }
  ];

  const filteredUrns = urns.filter(urn => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return urn.type === 'active';
    if (activeTab === 'pending') return urn.type === 'pending';
    if (activeTab === 'inactive') return urn.type === 'inactive';
    return true;
  });

  return (
    <div className="screen">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        &nbsp;&#8250;&nbsp; <span>My URNs</span>
      </div>

      <div className="myurns-header">
        <div>
          <div className="page-title">My URNs</div>
          <div className="page-title-sub">ABC Pharmaceuticals Ltd. &nbsp;·&nbsp; Mumbai Zonal Office Jurisdiction</div>
        </div>
        <Link to="/urns/apply" className="btn-primary">+ Apply for New URN</Link>
      </div>

      <div className="summary-strip">
        <div className="summary-chip">
          <div>
            <div className="chip-value">2</div>
            <div className="chip-label">Active URNs</div>
          </div>
        </div>
        <div className="summary-chip">
          <div>
            <div className="chip-value" style={{ color: '#B7751D' }}>1</div>
            <div className="chip-label">Pending Approval</div>
          </div>
        </div>
        <div className="summary-chip">
          <div>
            <div className="chip-value" style={{ color: '#C0392B' }}>2</div>
            <div className="chip-label">Returns Due</div>
          </div>
        </div>
        <div className="summary-chip">
          <div>
            <div className="chip-value" style={{ color: '#1E7B4B' }}>0</div>
            <div className="chip-label">Inactive / Surrendered</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'center' }}>
        <input type="text" placeholder="Search by URN number, substance, or zone..." style={{ flex: 1, padding: '8px 12px', border: '1px solid #D0D5DC', borderRadius: '5px', fontSize: '12px', fontFamily: 'inherit', color: '#1A2332', background: '#fff', outline: 'none' }} />
        <select style={{ padding: '8px 10px', border: '1px solid #D0D5DC', borderRadius: '5px', fontSize: '12px', fontFamily: 'inherit', color: '#5A6474', background: '#fff' }}>
          <option>All Zones</option>
          <option>Mumbai Zone</option>
          <option>Delhi Zone</option>
        </select>
      </div>

      <div style={{ background: '#fff', border: '1px solid #E0E4E8', borderRadius: '6px 6px 0 0', borderBottom: 'none' }}>
        <div className="tab-row">
          <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All <span className="tab-count">3</span></div>
          <div className={`tab ${activeTab === 'active' ? 'active' : ''}`} onClick={() => setActiveTab('active')}>Active <span className="tab-count">2</span></div>
          <div className={`tab ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => setActiveTab('pending')}>Pending Approval <span className="tab-count">1</span></div>
          <div className={`tab ${activeTab === 'inactive' ? 'active' : ''}`} onClick={() => setActiveTab('inactive')}>Inactive <span className="tab-count">0</span></div>
        </div>
      </div>

      <div className="urn-full-table-wrap">
        <table className="urn-full-table">
          <thead>
            <tr>
              <th>URN Number</th>
              <th>Controlled Substances</th>
              <th>Registered Purpose</th>
              <th>Zonal Office</th>
              <th>Date Issued</th>
              <th>Status</th>
              <th>Returns — Q1 2026</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUrns.map((urn, i) => (
              <tr key={i} className={urn.type === 'pending' ? 'row-pending' : ''}>
                <td>
                  <span className="urn-num">{urn.id}</span>
                  <span className="urn-sub-text">{urn.type === 'pending' ? '' : 'Issued '} {urn.date}</span>
                </td>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {urn.substances.map(s => (
                      <span key={s} style={{ display: 'inline-block', background: urn.type === 'pending' ? '#F2F0FA' : '#EEF2F8', color: urn.type === 'pending' ? '#5A4090' : '#3A5080', borderRadius: '3px', padding: '2px 7px', fontSize: '10px', fontWeight: 600, width: 'fit-content' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{urn.purpose}</td>
                <td>{urn.zone}</td>
                <td>{urn.type === 'pending' ? '—' : urn.date}</td>
                <td>
                  {urn.status === 'Active' ? (
                    <span className="status-pill" style={{ background: '#EAF5EE', color: '#1E7B4B' }}>&#9679; Active</span>
                  ) : (
                    <span className="status-pill" style={{ background: '#FEF3E2', color: '#B7751D' }}>&#9679; Under Review</span>
                  )}
                </td>
                <td>
                  {urn.returnsPending > 0 ? (
                    <>
                      <span style={{ color: '#B7751D', fontSize: '11px', fontWeight: 600 }}>{urn.returnsPending} returns pending</span><br />
                      <span style={{ color: '#8B98A8', fontSize: '10px' }}>{urn.returnsDesc}</span>
                    </>
                  ) : (
                    <span style={{ color: '#8B98A8', fontSize: '11px' }}>{urn.returnsDesc}</span>
                  )}
                </td>
                <td>
                  <div className="row-actions">
                    <span className="rlink">View</span>
                    <span className="rsep">|</span>
                    <span className={urn.type === 'pending' ? "rlink off" : "rlink"} data-tip={urn.type === 'pending' ? "Available after URN is issued" : ""}>Request Change</span>
                    <span className="rsep">|</span>
                    <span className="rlink off" data-tip={urn.type === 'pending' ? "Available after URN is issued" : "Stock must be nil to surrender"}>Surrender</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="spacer"></div>
    </div>
  );
}
