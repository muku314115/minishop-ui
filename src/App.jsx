import React, { useState } from 'react';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Orders from './pages/Orders.jsx';
import Products from './pages/Products.jsx';
import Customers from './pages/Customers.jsx';
import Analytics from './pages/Analytics.jsx';
import Marketing from './pages/Marketing.jsx';
import Discounts from './pages/Discounts.jsx';
import Settings from './pages/Settings.jsx';

const PAGES = {
  home: Dashboard,
  orders: Orders,
  products: Products,
  customers: Customers,
  analytics: Analytics,
  marketing: Marketing,
  discounts: Discounts,
  settings: Settings,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const PageComponent = PAGES[currentPage] || Dashboard;

  return (
    <>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        <PageComponent />
      </Layout>

      <style>{`
        #createos-badge {
          position: fixed;
          bottom: 12px;
          right: 12px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 999px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.10);
          font-size: 11px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          font-family: system-ui, sans-serif;
        }
        #createos-badge:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
        #createos-badge img { width: 14px; height: 14px; }
      `}</style>
      <a
        id="createos-badge"
        href="https://createos.sh/app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://nodeops.network/SymbolBlack.svg" alt="" />
        Built with CreateOS
      </a>
    </>
  );
}
