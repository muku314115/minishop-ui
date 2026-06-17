import React from 'react';
import StatCard from '../components/StatCard.jsx';
import Card from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Table from '../components/Table.jsx';

const RECENT_ORDERS = [
  {
    id: '#1089',
    date: 'Jun 15, 2026',
    customer: 'Sarah Miller',
    payment: 'Paid',
    paymentVariant: 'green',
    fulfillment: 'Fulfilled',
    fulfillmentVariant: 'green',
    total: '$125.00',
  },
  {
    id: '#1088',
    date: 'Jun 15, 2026',
    customer: 'James Wilson',
    payment: 'Paid',
    paymentVariant: 'green',
    fulfillment: 'Unfulfilled',
    fulfillmentVariant: 'yellow',
    total: '$89.00',
  },
  {
    id: '#1087',
    date: 'Jun 14, 2026',
    customer: 'Emma Davis',
    payment: 'Pending',
    paymentVariant: 'yellow',
    fulfillment: 'Unfulfilled',
    fulfillmentVariant: 'yellow',
    total: '$234.00',
  },
  {
    id: '#1086',
    date: 'Jun 14, 2026',
    customer: 'Robert Brown',
    payment: 'Paid',
    paymentVariant: 'green',
    fulfillment: 'Fulfilled',
    fulfillmentVariant: 'green',
    total: '$67.50',
  },
  {
    id: '#1085',
    date: 'Jun 13, 2026',
    customer: 'Lisa Anderson',
    payment: 'Refunded',
    paymentVariant: 'red',
    fulfillment: 'Fulfilled',
    fulfillmentVariant: 'green',
    total: '$199.00',
  },
];

const TOP_PRODUCTS = [
  { name: 'Wireless Headphones Pro', units: 184, revenue: '$18,400', pct: 100 },
  { name: 'Running Shoes X9', units: 142, revenue: '$14,200', pct: 77 },
  { name: 'Premium Cotton T-Shirt', units: 118, revenue: '$4,720', pct: 64 },
  { name: 'Leather Wallet Slim', units: 97, revenue: '$6,790', pct: 53 },
  { name: 'Ceramic Coffee Mug', units: 73, revenue: '$2,190', pct: 40 },
];

const ORDER_COLUMNS = [
  { label: 'Order' },
  { label: 'Date' },
  { label: 'Customer' },
  { label: 'Payment' },
  { label: 'Fulfillment' },
  { label: 'Total', style: { textAlign: 'right' } },
];

export default function Dashboard() {
  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Home</h1>
            <p className="page-subtitle">Welcome back, Alex. Here's what's happening in your store.</p>
          </div>
          <button className="btn btn-secondary btn-sm">
            View report
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="stat-cards-grid">
        <StatCard label="Total Sales" value="$48,290.00" change={12.5} />
        <StatCard label="Orders" value="1,284" change={8.2} />
        <StatCard label="Customers" value="5,621" change={3.1} />
        <StatCard label="Conversion Rate" value="3.8%" change={-0.4} />
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Recent Orders */}
        <div className="dashboard-main">
          <Card
            title="Recent orders"
            action={
              <button className="btn btn-secondary btn-sm">View all orders</button>
            }
          >
            <Table columns={ORDER_COLUMNS}>
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id}>
                  <td>
                    <span className="order-number">{order.id}</span>
                  </td>
                  <td className="text-secondary">{order.date}</td>
                  <td>{order.customer}</td>
                  <td>
                    <Badge variant={order.paymentVariant}>{order.payment}</Badge>
                  </td>
                  <td>
                    <Badge variant={order.fulfillmentVariant}>{order.fulfillment}</Badge>
                  </td>
                  <td className="text-right" style={{ fontWeight: 500 }}>
                    {order.total}
                  </td>
                </tr>
              ))}
            </Table>
          </Card>
        </div>

        {/* Top Products */}
        <div className="dashboard-side">
          <Card title="Top products">
            <div className="card-body" style={{ padding: '12px 20px 16px' }}>
              {TOP_PRODUCTS.map((product, i) => (
                <div key={i} className="top-product-item">
                  <div className="top-product-rank">{i + 1}</div>
                  <div className="top-product-info">
                    <div className="top-product-name">{product.name}</div>
                    <div className="top-product-units">{product.units} units sold</div>
                    <div className="top-product-bar-wrap">
                      <div
                        className="top-product-bar"
                        style={{ width: `${product.pct}%` }}
                      />
                    </div>
                  </div>
                  <div className="top-product-revenue">{product.revenue}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
