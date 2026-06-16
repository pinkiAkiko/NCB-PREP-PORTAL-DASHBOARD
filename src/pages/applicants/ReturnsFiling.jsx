import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ReturnsFiling() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="screen">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        &nbsp;&#8250;&nbsp; <span>Returns Filing</span>
      </div>

      <div className="myurns-header">
        <div>
          <div className="page-title">Returns Filing</div>
          <div className="page-title-sub">Statutory quarterly returns for all active URNs</div>
        </div>
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button className="btn-primary" onClick={() => setDropdownOpen(!dropdownOpen)}>
            + Start New Filing &nbsp;&#9660;
          </button>
          {dropdownOpen && (
            <div style={{ position: 'absolute', right: 0, top: '110%', background: '#fff', border: '1px solid #D0D5DC', borderRadius: '5px', minWidth: '230px', zIndex: 100, overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '7px 14px', fontSize: '10px', color: '#8B98A8', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #F0F2F5', background: '#FAFBFC' }}>Select Form</div>
              <div className="dropdown-item" style={{ padding: '9px 14px', fontSize: '12px', color: '#1A2332', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ background: '#EEF2F8', color: '#1E4A8A', borderRadius: '3px', padding: '1px 6px', fontSize: '11px', fontWeight: 700 }}>E</span>
                Manufacturer Quarterly Return
              </div>
              <div className="dropdown-item" style={{ padding: '9px 14px', fontSize: '12px', color: '#1A2332', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ background: '#F0EEF8', color: '#5A3A9A', borderRadius: '3px', padding: '1px 6px', fontSize: '11px', fontWeight: 700 }}>H</span>
                Inter-zone Movement Report
              </div>
              <div className="dropdown-item" style={{ padding: '9px 14px', fontSize: '12px', color: '#1A2332', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ background: '#EEF6F0', color: '#1E6A40', borderRadius: '3px', padding: '1px 6px', fontSize: '11px', fontWeight: 700 }}>L</span>
                B2B / Broker Portal Return
              </div>
              <div style={{ borderTop: '1px solid #F0F2F5' }}></div>
              <div style={{ padding: '9px 14px', fontSize: '12px', color: '#C0C8D0', display: 'flex', alignItems: 'center', gap: '8px' }} title="Consumer companies only">
                <span style={{ background: '#F0F2F5', color: '#A0A8B0', borderRadius: '3px', padding: '1px 6px', fontSize: '11px', fontWeight: 700 }}>F</span>
                Consumer Return &nbsp;<span style={{ fontSize: '10px' }}>not applicable</span>
              </div>
              <div style={{ padding: '9px 14px', fontSize: '12px', color: '#C0C8D0', display: 'flex', alignItems: 'center', gap: '8px' }} title="Inactive until NCB activates">
                <span style={{ background: '#F0F2F5', color: '#A0A8B0', borderRadius: '3px', padding: '1px 6px', fontSize: '11px', fontWeight: 700 }}>C/D</span>
                Daily Register &nbsp;<span style={{ fontSize: '10px' }}>inactive</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ background: '#FEF3E2', border: '1px solid #F0D090', borderLeft: '3px solid #B7751D', borderRadius: '0 5px 5px 0', padding: '10px 16px', marginBottom: '16px' }}>
        <span style={{ color: '#B7751D', fontWeight: 600, fontSize: '12px' }}>3 returns due in 5 days</span>
        <span style={{ color: '#8B98A8', fontSize: '11px', marginLeft: '10px' }}>Deadline: 21 Jun 2026 &nbsp;·&nbsp; Missing this deadline will place your company on the Non-Filer List</span>
      </div>

      <div style={{ background: '#fff', border: '1px solid #E0E4E8', borderRadius: '6px', marginBottom: '14px' }}>
        <div className="section-hd">
          <div className="section-title">Pending Filings</div>
          <div style={{ fontSize: '10px', color: '#B7751D', fontWeight: 700 }}>3 returns due &nbsp;·&nbsp; Q1 2026 (Jan – Mar)</div>
        </div>

        <div style={{ padding: '12px 14px', borderBottom: '1px solid #F2F4F6', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#EEF2F8', borderRadius: '4px', padding: '7px 10px', textAlign: 'center', flexShrink: 0, minWidth: '48px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E4A8A', lineHeight: 1 }}>E</div>
            <div style={{ fontSize: '9px', color: '#5A7AAA', marginTop: '2px' }}>Form</div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#1A2332' }}>Quarterly Return — Manufacture &amp; Sale</div>
            <div style={{ fontSize: '11px', color: '#7A8A9A', marginTop: '3px' }}>
              URN PREP/ZO-MH/2026/00142 &nbsp;·&nbsp;
              <span style={{ background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 5px', fontSize: '10px', fontWeight: 600 }}>Acetic Anhydride</span>
              &nbsp;·&nbsp; Q1 2026 &nbsp;·&nbsp; Mumbai Zone
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '10px', color: '#B7751D', fontWeight: 600, marginBottom: '4px' }}>Due 21 Jun 2026</div>
            <span style={{ display: 'inline-block', background: '#FDECEA', color: '#C0392B', borderRadius: '3px', padding: '1px 6px', fontSize: '9px', fontWeight: 700, marginBottom: '6px' }}>Not Started</span><br />
            <button className="action-btn">File Now &rarr;</button>
          </div>
        </div>

        <div style={{ padding: '12px 14px', borderBottom: '1px solid #F2F4F6', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#EEF2F8', borderRadius: '4px', padding: '7px 10px', textAlign: 'center', flexShrink: 0, minWidth: '48px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E4A8A', lineHeight: 1 }}>E</div>
            <div style={{ fontSize: '9px', color: '#5A7AAA', marginTop: '2px' }}>Form</div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#1A2332' }}>Quarterly Return — Manufacture &amp; Sale</div>
            <div style={{ fontSize: '11px', color: '#7A8A9A', marginTop: '3px' }}>
              URN PREP/ZO-MH/2026/00142 &nbsp;·&nbsp;
              <span style={{ background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 5px', fontSize: '10px', fontWeight: 600 }}>Ephedrine</span>
              &nbsp;·&nbsp; Q1 2026 &nbsp;·&nbsp; Mumbai Zone
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '10px', color: '#B7751D', fontWeight: 600, marginBottom: '4px' }}>Due 21 Jun 2026</div>
            <span style={{ display: 'inline-block', background: '#EAF5EE', color: '#1E7B4B', borderRadius: '3px', padding: '1px 6px', fontSize: '9px', fontWeight: 700, marginBottom: '6px' }}>Draft Saved</span><br />
            <button className="action-btn">Continue &rarr;</button>
          </div>
        </div>

        <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#EEF2F8', borderRadius: '4px', padding: '7px 10px', textAlign: 'center', flexShrink: 0, minWidth: '48px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E4A8A', lineHeight: 1 }}>E</div>
            <div style={{ fontSize: '9px', color: '#5A7AAA', marginTop: '2px' }}>Form</div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#1A2332' }}>Quarterly Return — Manufacture &amp; Sale</div>
            <div style={{ fontSize: '11px', color: '#7A8A9A', marginTop: '3px' }}>
              URN PREP/ZO-MH/2025/00089 &nbsp;·&nbsp;
              <span style={{ background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 5px', fontSize: '10px', fontWeight: 600 }}>Pseudoephedrine</span>
              &nbsp;·&nbsp; Q1 2026 &nbsp;·&nbsp; Mumbai Zone
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '10px', color: '#B7751D', fontWeight: 600, marginBottom: '4px' }}>Due 21 Jun 2026</div>
            <span style={{ display: 'inline-block', background: '#FDECEA', color: '#C0392B', borderRadius: '3px', padding: '1px 6px', fontSize: '9px', fontWeight: 700, marginBottom: '6px' }}>Not Started</span><br />
            <button className="action-btn">File Now &rarr;</button>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #E0E4E8', borderRadius: '6px' }}>
        <div className="section-hd" style={{ flexWrap: 'wrap', gap: '10px' }}>
          <div className="section-title">Submission History</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <select style={{ padding: '5px 8px', border: '1px solid #D0D5DC', borderRadius: '4px', fontSize: '11px', fontFamily: 'inherit', color: '#5A6474', background: '#fff' }}>
              <option>All Forms</option><option>Form E</option><option>Form H</option><option>Form L</option>
            </select>
            <select style={{ padding: '5px 8px', border: '1px solid #D0D5DC', borderRadius: '4px', fontSize: '11px', fontFamily: 'inherit', color: '#5A6474', background: '#fff' }}>
              <option>All URNs</option><option>PREP/ZO-MH/2026/00142</option><option>PREP/ZO-MH/2025/00089</option>
            </select>
            <select style={{ padding: '5px 8px', border: '1px solid #D0D5DC', borderRadius: '4px', fontSize: '11px', fontFamily: 'inherit', color: '#5A6474', background: '#fff' }}>
              <option>All Periods</option><option>Q4 2025</option><option>Q3 2025</option><option>Q2 2025</option>
            </select>
            <select style={{ padding: '5px 8px', border: '1px solid #D0D5DC', borderRadius: '4px', fontSize: '11px', fontFamily: 'inherit', color: '#5A6474', background: '#fff' }}>
              <option>All Statuses</option><option>Submitted</option><option>Discrepancy Flagged</option><option>Revised</option>
            </select>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '9px 14px', textAlign: 'left', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#8B98A8', fontWeight: 700, background: '#FAFBFC', borderBottom: '1px solid #E0E4E8' }}>Form</th>
              <th style={{ padding: '9px 14px', textAlign: 'left', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#8B98A8', fontWeight: 700, background: '#FAFBFC', borderBottom: '1px solid #E0E4E8' }}>URN &amp; Substance</th>
              <th style={{ padding: '9px 14px', textAlign: 'left', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#8B98A8', fontWeight: 700, background: '#FAFBFC', borderBottom: '1px solid #E0E4E8' }}>Period</th>
              <th style={{ padding: '9px 14px', textAlign: 'left', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#8B98A8', fontWeight: 700, background: '#FAFBFC', borderBottom: '1px solid #E0E4E8' }}>Submitted</th>
              <th style={{ padding: '9px 14px', textAlign: 'left', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#8B98A8', fontWeight: 700, background: '#FAFBFC', borderBottom: '1px solid #E0E4E8' }}>Status</th>
              <th style={{ padding: '9px 14px', background: '#FAFBFC', borderBottom: '1px solid #E0E4E8' }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', verticalAlign: 'middle' }}><span style={{ background: '#EEF2F8', borderRadius: '4px', padding: '3px 8px', fontSize: '13px', fontWeight: 700, color: '#1E4A8A' }}>E</span></td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', fontSize: '12px', verticalAlign: 'middle' }}>
                <div style={{ fontWeight: 500, color: '#1A2332' }}>PREP/ZO-MH/2026/00142</div>
                <span style={{ background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 5px', fontSize: '10px', fontWeight: 600 }}>Acetic Anhydride</span>
              </td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', fontSize: '12px', color: '#1A2332', verticalAlign: 'middle' }}>Q4 2025</td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', fontSize: '12px', color: '#5A6474', verticalAlign: 'middle' }}>10 Jan 2026</td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', verticalAlign: 'middle' }}><span style={{ background: '#F0F2F5', color: '#5A6474', borderRadius: '10px', padding: '2px 8px', fontSize: '10px', fontWeight: 600 }}>Submitted</span></td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', verticalAlign: 'middle' }}><span className="rlink">View</span></td>
            </tr>
            <tr style={{ background: '#FFFBF5' }}>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', verticalAlign: 'middle' }}><span style={{ background: '#EEF2F8', borderRadius: '4px', padding: '3px 8px', fontSize: '13px', fontWeight: 700, color: '#1E4A8A' }}>E</span></td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', fontSize: '12px', verticalAlign: 'middle' }}>
                <div style={{ fontWeight: 500, color: '#1A2332' }}>PREP/ZO-MH/2025/00089</div>
                <span style={{ background: '#EEF2F8', color: '#3A5080', borderRadius: '3px', padding: '1px 5px', fontSize: '10px', fontWeight: 600 }}>Pseudoephedrine</span>
              </td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', fontSize: '12px', color: '#1A2332', verticalAlign: 'middle' }}>Q4 2025</td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', fontSize: '12px', color: '#5A6474', verticalAlign: 'middle' }}>12 Jan 2026</td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', verticalAlign: 'middle' }}><span style={{ background: '#FEF3E2', color: '#B7751D', borderRadius: '10px', padding: '2px 8px', fontSize: '10px', fontWeight: 600 }}>&#9888; Discrepancy Flagged</span></td>
              <td style={{ padding: '10px 14px', borderBottom: '1px solid #F2F4F6', verticalAlign: 'middle' }}><span className="rlink" style={{ color: '#C0392B' }}>View &amp; Respond</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="spacer"></div>
    </div>
  );
}
