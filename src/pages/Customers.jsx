import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import Table from '../components/Table.jsx';
import { Search, Download, Upload, ChevronLeft, ChevronRight } from 'lucide-react';

const AVATAR_COLORS = [
  '#5C6AC4', '#47C1BF', '#006FBB', '#95BF47',
  '#F49342', '#DE3618', '#8B5CF6', '#EC4899',
];

const CUSTOMERS = [
  { id: 1, name: 'Sarah Miller', email: 'sarah.miller@email.com', location: 'New York, US', orders: 12, spent: '$1,234.00', lastOrder: 'Jun 15, 2026', initials: 'SM', color: AVATAR_COLORS[0] },
  { id: 2, name: 'James Wilson', email: 'james.w@email.com', location: 'Los Angeles, US', orders: 8, spent: '$892.50', lastOrder: 'Jun 15, 2026', initials: 'JW', color: AVATAR_COLORS[1] },
  { id: 3, name: 'Emma Davis', email: 'emma.davis@email.com', location: 'Chicago, US', orders: 5, spent: '$678.00', lastOrder: 'Jun 14, 2026', initials: 'ED', color: AVATAR_COLORS[2] },
  { id: 4, name: 'Robert Brown', email: 'r.brown@email.com', location: 'Houston, US', orders: 3, spent: '$234.50', lastOrder: 'Jun 14, 2026', initials: 'RB', color: AVATAR_COLORS[3] },
  { id: 5, name: 'Lisa Anderson', email: 'lisa.anderson@email.com', location: 'Toronto, CA', orders: 15, spent: '$2,445.00', lastOrder: 'Jun 13, 2026', initials: 'LA', color: AVATAR_COLORS[4] },
  { id: 6, name: 'Michael Chen', email: 'm.chen@email.com', location: 'San Francisco, US', orders: 22, spent: '$4,120.00', lastOrder: 'Jun 13, 2026', initials: 'MC', color: AVATAR_COLORS[5] },
  { id: 7, name: 'Jessica Taylor', email: 'jessica.t@email.com', location: 'London, UK', orders: 6, spent: '$512.00', lastOrder: 'Jun 12, 2026', initials: 'JT', color: AVATAR_COLORS[6] },
  { id: 8, name: 'David Martinez', email: 'd.martinez@email.com', location: 'Miami, US', orders: 9, spent: '$1,087.50', lastOrder: 'Jun 12, 2026', initials: 'DM', color: AVATAR_COLORS[7] },
  { id: 9, name: 'Emily Johnson', email: 'emily.j@email.com', location: 'Seattle, US', orders: 18, spent: '$3,290.00', lastOrder: 'Jun 11, 2026', initials: 'EJ', color: AVATAR_COLORS[0] },
  { id: 10, name: 'Daniel Lee', email: 'daniel.lee@email.com', location: 'Austin, US', orders: 4, spent: '$445.00', lastOrder: 'Jun 11, 2026', initials: 'DL', color: AVATAR_COLORS[1] },
  { id: 11, name: 'Sophia White', email: 'sophia.w@email.com', location: 'Boston, US', orders: 7, spent: '$734.50', lastOrder: 'Jun 10, 2026', initials: 'SW', color: AVATAR_COLORS[2] },
  { id: 12, name: 'Noah Harris', email: 'noah.h@email.com', location: 'Denver, US', orders: 2, spent: '$198.00', lastOrder: 'Jun 10, 2026', initials: 'NH', color: AVATAR_COLORS[3] },
];

const COLUMNS = [
  { label: 'Customer' },
  { label: 'Location' },
  { label: 'Orders', style: { textAlign: 'center' } },
  { label: 'Spent', style: { textAlign: 'right' } },
  { label: 'Last order' },
];

const PAGE_SIZE = 8;

export default function Customers() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = CUSTOMERS.filter((c) =>
    search
      ? c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.location.toLowerCase().includes(search.toLowerCase())
      : true
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, filtered.length);

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Customers</h1>
            <p className="page-subtitle">{CUSTOMERS.length} customers total</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary">
              <Upload size={15} />
              Import
            </button>
            <button className="btn btn-secondary">
              <Download size={15} />
              Export
            </button>
          </div>
        </div>
      </div>

      <Card>
        {/* Toolbar */}
        <div className="table-toolbar" style={{ padding: '16px 20px 0' }}>
          <div className="search-bar">
            <Search className="search-bar-icon" size={15} />
            <input
              type="text"
              placeholder="Search customers"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
        </div>

        {/* Table */}
        <Table columns={COLUMNS}>
          {paginated.map((customer) => (
            <tr key={customer.id}>
              <td>
                <div className="customer-cell">
                  <div
                    className="customer-avatar"
                    style={{ background: customer.color }}
                  >
                    {customer.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, color: 'var(--color-primary)' }}>
                      {customer.name}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-subdued)' }}>
                      {customer.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-secondary">{customer.location}</td>
              <td style={{ textAlign: 'center' }}>{customer.orders}</td>
              <td style={{ textAlign: 'right', fontWeight: 500 }}>{customer.spent}</td>
              <td className="text-secondary">{customer.lastOrder}</td>
            </tr>
          ))}
          {paginated.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-subdued)' }}>
                No customers found
              </td>
            </tr>
          )}
        </Table>

        {/* Pagination */}
        <div className="pagination">
          <span className="pagination-info">
            {filtered.length > 0
              ? `${start}–${end} of ${filtered.length} customers`
              : '0 customers'}
          </span>
          <div className="pagination-btns">
            <button
              className="pagination-btn"
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
            >
              <ChevronLeft size={14} /> Previous
            </button>
            <button
              className="pagination-btn"
              disabled={page >= totalPages}
              onClick={() => setPage(p => p + 1)}
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
