import React from 'react';

export default function Card({ children, title, action, style }) {
  return (
    <div className="card" style={style}>
      {title && (
        <div className="card-header">
          <span className="card-title">{title}</span>
          {action && action}
        </div>
      )}
      {children}
    </div>
  );
}
