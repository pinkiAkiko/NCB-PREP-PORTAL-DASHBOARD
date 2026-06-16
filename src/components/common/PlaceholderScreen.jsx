import React from 'react';
import { Link } from 'react-router-dom';

export default function PlaceholderScreen({ title, description, parentTitle, parentLink }) {
  return (
    <div className="screen">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        {parentTitle && parentLink && (
          <>
            &nbsp;&#8250;&nbsp; <Link to={parentLink}>{parentTitle}</Link>
          </>
        )}
        &nbsp;&#8250;&nbsp; <span>{title}</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #E0E4E8', borderRadius: '6px', padding: '40px', textAlign: 'center', color: '#8B98A8', marginTop: '20px' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#3A4A5A', marginBottom: '8px' }}>{title}</div>
        <div style={{ fontSize: '12px' }}>{description}</div>
      </div>
    </div>
  );
}
