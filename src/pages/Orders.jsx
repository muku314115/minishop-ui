import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Table from '../components/Table.jsx';
import { Search, Download, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ALL_ORDERS = [
  { id: '#1089', date: 'Jun 15, 2026', customer: 'Sarah Miller', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$125.00', status: 'closed' },
  { id: '#1088', date: 'Jun 15, 2026', customer: 'James Wilson', payment: 'Paid', paymentV: 'green', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$89.00', status: 'open' },
  { id: '#1087', date: 'Jun 14, 2026', customer: 'Emma Davis', payment: 'Pending', paymentV: 'yellow', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$234.00', status: 'open' },
  { id: '#1086', date: 'Jun 14, 2026', customer: 'Robert Brown', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$67.50', status: 'closed' },
  { id: '#1085', date: 'Jun 13, 2026', customer: 'Lisa Anderson', payment: 'Refunded', paymentV: 'red', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$199.00', status: 'closed' },
  { id: '#1084', date: 'Jun 13, 2026', customer: 'Michael Chen', payment: 'Paid', paymentV: 'green', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$312.00', status: 'open' },
  { id: '#1083', date: 'Jun 12, 2026', customer: 'Jessica Taylor', payment: 'Pending', paymentV: 'yellow', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$54.00', status: 'open' },
  { id: '#1082', date: 'Jun 12, 2026', customer: 'David Martinez', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$178.50', status: 'closed' },
  { id: '#1081', date: 'Jun 11, 2026', customer: 'Emily Johnson', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$445.00', status: 'closed' },
  { id: '#1080', date: 'Jun 11, 2026', customer: 'Daniel Lee', payment: 'Pending', paymentV: 'yellow', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$92.00', status: 'open' },
  { id: '#1079', date: 'Jun 10, 2026', customer: 'Sophia White', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$263.00', status: 'closed' },
  { id: '#1078', date: 'Jun 10, 2026', customer: 'Noah Harris', payment: 'Refunded', paymentV: 'red', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$88.00', status: 'closed' },
  { id: '#1077', date: 'Jun 9, 2026', customer: 'Olivia Clark', payment: 'Paid', paymentV: 'green', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$153.00', status: 'open' },
  { id: '#1076', date: 'Jun 9, 2026', customer: 'Liam Walker', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$77.50', status: 'closed' },
  { id: '#1075', date: 'Jun 8, 2026', customer: 'Ava Robinson', payment: 'Pending', paymentV: 'yellow', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$389.00', status: 'open' },
  { id: '#1074', date: 'Jun 8, 2026', customer: 'Ethan Lewis', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$215.00', status: 'closed' },
  { id: '#1073', date: 'Jun 7, 2026', customer: 'Isabella Hall', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$140.00', status: 'closed' },
  { id: '#1072', date: 'Jun 7, 2026', customer: 'Mason Allen', payment: 'Refunded', paymentV: 'red', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$68.00', status: 'closed' },
  { id: '#1071', date: 'Jun 6, 2026', customer: 'Mia Young', payment: 'Paid', paymentV: 'green', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$295.00', status: 'open' },
  { id: '#1070', date: 'Jun 6, 2026', customer: 'Logan Scott', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$102.00', status: 'closed' },
  { id: '#1069', date: 'Jun 5, 2026', customer: 'Charlotte Green', payment: 'Pending', paymentV: 'yellow', fulfillment: 'Unfulfilled', fulfillmentV: 'yellow', total: '$187.00', status: 'open' },
  { id: '#1068', date: 'Jun 5, 2026', customer: 'Benjamin Adams', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$320.00', status: 'closed' },
  { id: '#1067', date: 'Jun 4, 2026', customer: 'Amelia Baker', payment: 'Paid', paymentV: 'green', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$59.00', status: 'closed' },
  { id: '#1066', date: 'Jun 4, 2026', customer: 'Harper Nelson', payment: 'Refunded', paymentV: 'red', fulfillment: 'Fulfilled', fulfillmentV: 'green', total: '$144.00', status: 'closed' },
];

const TABS = [
  { id: 'all', label: 'All', count: 24 },
  { id: 'open', label: 'Open', count: 8 },
  { id: 'unfulfilled', label: 'Unfulfilled', count: 5 },
  { id: 'unpaid', label: 'Unpaid', count: 3 },
  { id: 'closed', label: 'Closed', count: 8 },
];

const ORDER_COLUMNS = [
  { label: 'Order' },
  { label: 'Date' },
  { label: 'Customer' },
  { label: 'Payment' },
  { label: 'Fulfillment' },
  { label: 'Total', style: { textAlign: 'right' } },
];

const PAGE_SIZE = 10;

export default function Orders() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = ALL_ORDERS.filter((o) => {
    const matchTab =
      activeTab === 'all' ? true :
      activeTab === 'open' ? o.status === 'open' :
      activeTab === 'unfulfilled' ? o.fulfillment === 'Unfulfilled' :
      activeTab === 'unpaid' ? (o.payment === 'Pending') :
      activeTab === 'closed' ? o.status === 'closed' : true;

    const matchSearch = search
      ? o.customer.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchTab && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, filtered.length);

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Orders</h1>
            <p className="page-subtitle">Manage and fulfill your customer orders</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary">
              <Download size={15} />
              Export
            </button>
            <button className="btn btn-primary">
              <Plus size={15} />
              Create order
            </button>
          </div>
        </div>
      </div>

      <Card>
        {/* Filter Tabs */}
        <div className="filter-tabs" style={{ padding: '0 20px' }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`filter-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setPage(1); }}
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
              placeholder="Search orders"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
        </div>

        {/* Table */}
        <Table columns={ORDER_COLUMNS}>
          {paginated.map((order) => (
            <tr key={order.id}>
              <td><span className="order-number">{order.id}</span></td>
              <td className="text-secondary">{order.date}</td>
              <td>{order.customer}</td>
              <td><Badge variant={order.paymentV}>{order.payment}</Badge></td>
              <td><Badge variant={order.fulfillmentV}>{order.fulfillment}</Badge></td>
              <td className="text-right" style={{ fontWeight: 500 }}>{order.total}</td>
            </tr>
          ))}
          {paginated.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-subdued)' }}>
                No orders found
              </td>
            </tr>
          )}
        </Table>

        {/* Pagination */}
        <div className="pagination">
          <span className="pagination-info">
            {filtered.length > 0
              ? `${start}–${end} of ${filtered.length} orders`
              : '0 orders'}
          </span>
          <div className="pagination-btns">
            <button
              className="pagination-btn"
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              aria-label="Previous page"
            >
              <ChevronLeft size={14} /> Previous
            </button>
            <button
              className="pagination-btn"
              disabled={page >= totalPages}
              onClick={() => setPage(p => p + 1)}
              aria-label="Next page"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
