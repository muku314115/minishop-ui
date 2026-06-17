import React from 'react';

export default function StatCard({ label, value, change, changeLabel }) {
  const isPositive = change >= 0;
  const arrow = isPositive ? '▲' : '▼';
  const changeClass = isPositive ? 'positive' : 'negative';
  const changeAbs = Math.abs(change).toFixed(1);

  return (
    <div className="stat-card">
      <div className="stat-card-label">{label}</div>
      <div className="stat-card-value">{value}</div>
      <div className={`stat-card-change ${changeClass}`}>
        <span>{arrow}</span>
        <span>{changeAbs}%</span>
        <span style={{ color: 'var(--color-text-subdued)', fontWeight: 400 }}>
          {changeLabel || 'vs last month'}
        </span>
      </div>
    </div>
  );
}
