import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import { Search, Plus } from 'lucide-react';

const DISCOUNTS = [
  { id: 1, code: 'SUMMER20', type: 'Percentage', value: '20% off', usage: '142 / 500', status: 'Active', statusV: 'green', expires: 'Jul 31, 2026', minOrder: '$50.00' },
  { id: 2, code: 'WELCOME10', type: 'Percentage', value: '10% off', usage: '89 / ∞', status: 'Active', statusV: 'green', expires: 'No expiry', minOrder: 'None' },
  { id: 3, code: 'FREESHIP', type: 'Free shipping', value: 'Free shipping', usage: '204 / ∞', status: 'Active', statusV: 'green', expires: 'No expiry', minOrder: '$35.00' },
  { id: 4, code: 'FLASH50', type: 'Fixed amount', value: '$50.00 off', usage: '38 / 100', status: 'Active', statusV: 'green', expires: 'Jun 20, 2026', minOrder: '$100.00' },
  { id: 5, code: 'HOLIDAY30', type: 'Percentage', value: '30% off', usage: '312 / 300', status: 'Expired', statusV: 'grey', expires: 'Jan 1, 2026', minOrder: '$75.00' },
  { id: 6, code: 'NEWUSER15', type: 'Percentage', value: '15% off', usage: '0 / 200', status: 'Scheduled', statusV: 'blue', expires: 'Jul 1, 2026', minOrder: 'None' },
];

export default function Discounts() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filtered = DISCOUNTS.filter((d) => {
    const matchTab =
      activeTab === 'all' ? true :
      activeTab === 'active' ? d.status === 'Active' :
      activeTab === 'expired' ? d.status === 'Expired' :
      activeTab === 'scheduled' ? d.status === 'Scheduled' : true;
    const matchSearch = search
      ? d.code.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchTab && matchSearch;
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Discounts</h1>
            <p className="page-subtitle">Create and manage discount codes and promotions</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={15} />
            Create discount
          </button>
        </div>
      </div>

      <Card>
        {/* Tabs */}
        <div className="filter-tabs" style={{ padding: '0 20px' }}>
          {[
            { id: 'all', label: 'All', count: 6 },
            { id: 'active', label: 'Active', count: 4 },
            { id: 'scheduled', label: 'Scheduled', count: 1 },
            { id: 'expired', label: 'Expired', count: 1 },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`filter-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <span className="filter-tab-count">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="table-toolbar" style={{ padding: '0 20px' }}>
          <div className="search-bar">
            <Search className="search-bar-icon" size={15} />
            <input
              type="text"
              placeholder="Search discount codes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ paddingLeft: 20 }}>Discount code</th>
                <th>Type</th>
                <th>Value</th>
                <th>Minimum order</th>
                <th>Usage</th>
                <th>Expires</th>
                <th style={{ paddingRight: 20 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d) => (
                <tr key={d.id}>
                  <td style={{ paddingLeft: 20 }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary)', background: 'var(--color-surface)', padding: '2px 6px', borderRadius: 3, border: '1px solid var(--color-border)' }}>
                      {d.code}
                    </span>
                  </td>
                  <td className="text-secondary">{d.type}</td>
                  <td style={{ fontWeight: 500 }}>{d.value}</td>
                  <td className="text-secondary">{d.minOrder}</td>
                  <td className="text-secondary">{d.usage}</td>
                  <td className="text-secondary">{d.expires}</td>
                  <td style={{ paddingRight: 20 }}>
                    <Badge variant={d.statusV}>{d.status}</Badge>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-subdued)' }}>
                    No discounts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
