import React from 'react';
import Card from '../components/Card.jsx';
import { Megaphone, Plus, TrendingUp, Mail, Share2, MousePointer } from 'lucide-react';

const CAMPAIGNS = [
  { name: 'Summer Sale Email Campaign', type: 'Email', status: 'Active', clicks: '2,840', revenue: '$4,120', statusColor: '#008060', statusBg: '#AEE9D1' },
  { name: 'Facebook Retargeting — June', type: 'Social', status: 'Active', clicks: '1,540', revenue: '$2,680', statusColor: '#008060', statusBg: '#AEE9D1' },
  { name: 'Google Search — Headphones', type: 'Search', status: 'Paused', clicks: '892', revenue: '$1,240', statusColor: '#595130', statusBg: '#FFEA8A' },
  { name: 'Instagram Story Ads', type: 'Social', status: 'Active', clicks: '3,210', revenue: '$5,880', statusColor: '#008060', statusBg: '#AEE9D1' },
  { name: 'Newsletter — Product Launch', type: 'Email', status: 'Draft', clicks: '—', revenue: '—', statusColor: '#6D7175', statusBg: '#E4E5E7' },
];

const CHANNEL_ICONS = {
  Email: Mail,
  Social: Share2,
  Search: MousePointer,
};

export default function Marketing() {
  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Marketing</h1>
            <p className="page-subtitle">Create and manage marketing campaigns to grow your store</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={15} />
            Create campaign
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stat-cards-grid">
        {[
          { label: 'Total Ad Spend', value: '$3,420', change: '+18%', positive: true },
          { label: 'Revenue from Ads', value: '$13,920', change: '+24%', positive: true },
          { label: 'Total Clicks', value: '8,482', change: '+11%', positive: true },
          { label: 'ROAS', value: '4.07x', change: '+0.3x', positive: true },
        ].map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-card-label">{s.label}</div>
            <div className="stat-card-value">{s.value}</div>
            <div className="stat-card-change positive">
              <span>▲</span> <span>{s.change}</span>
              <span className="stat-vs">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Campaigns Table */}
      <Card title="Campaigns">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th className="marketing-table-th-first">Campaign</th>
                <th>Type</th>
                <th>Status</th>
                <th className="marketing-table-th-right">Clicks</th>
                <th className="marketing-table-th-last">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {CAMPAIGNS.map((c, i) => {
                const Icon = CHANNEL_ICONS[c.type] || Megaphone;
                return (
                  <tr key={i}>
                    <td className="marketing-campaign-cell">
                      <div className="marketing-campaign-inner">
                        <div className="marketing-campaign-icon">
                          <Icon size={15} color="var(--color-text-secondary)" />
                        </div>
                        <span className="marketing-campaign-name">{c.name}</span>
                      </div>
                    </td>
                    <td className="marketing-td-type">{c.type}</td>
                    <td>
                      <span className="marketing-status-badge" style={{ background: c.statusBg, color: c.statusColor }}>
                        {c.status}
                      </span>
                    </td>
                    <td className="marketing-td-clicks">{c.clicks}</td>
                    <td className="marketing-td-revenue">{c.revenue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
