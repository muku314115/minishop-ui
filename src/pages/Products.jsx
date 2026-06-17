import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Table from '../components/Table.jsx';
import { Search, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCT_COLORS = [
  '#5C6AC4', '#47C1BF', '#006FBB', '#95BF47',
  '#F49342', '#DE3618', '#8B5CF6', '#EC4899',
];

const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones Pro', status: 'Active', statusV: 'green', inventory: '142 in stock', type: 'Electronics', vendor: 'TechSound Co.', color: PRODUCT_COLORS[0] },
  { id: 2, name: 'Running Shoes X9', status: 'Active', statusV: 'green', inventory: '87 in stock', type: 'Footwear', vendor: 'StridePlus', color: PRODUCT_COLORS[1] },
  { id: 3, name: 'Premium Cotton T-Shirt', status: 'Active', statusV: 'green', inventory: '256 in stock', type: 'Apparel', vendor: 'BasicWear', color: PRODUCT_COLORS[2] },
  { id: 4, name: 'Leather Wallet Slim', status: 'Active', statusV: 'green', inventory: '54 in stock', type: 'Accessories', vendor: 'LeatherCraft', color: PRODUCT_COLORS[3] },
  { id: 5, name: 'Ceramic Coffee Mug', status: 'Draft', statusV: 'grey', inventory: '0 in stock', type: 'Kitchenware', vendor: 'HomeGoods Inc.', color: PRODUCT_COLORS[4] },
  { id: 6, name: 'Yoga Mat Premium', status: 'Active', statusV: 'green', inventory: '38 in stock', type: 'Sports', vendor: 'ZenFit', color: PRODUCT_COLORS[5] },
  { id: 7, name: 'Mechanical Keyboard TKL', status: 'Draft', statusV: 'grey', inventory: '12 in stock', type: 'Electronics', vendor: 'KeyMaster', color: PRODUCT_COLORS[6] },
  { id: 8, name: 'Sunglasses Aviator', status: 'Archived', statusV: 'grey', inventory: '0 in stock', type: 'Accessories', vendor: 'SunView Co.', color: PRODUCT_COLORS[7] },
  { id: 9, name: 'Water Bottle Insulated', status: 'Active', statusV: 'green', inventory: '195 in stock', type: 'Sports', vendor: 'HydroFlow', color: PRODUCT_COLORS[0] },
  { id: 10, name: 'Desk Lamp LED', status: 'Active', statusV: 'green', inventory: '63 in stock', type: 'Home Office', vendor: 'BrightDesk', color: PRODUCT_COLORS[1] },
  { id: 11, name: 'Bluetooth Speaker Mini', status: 'Active', statusV: 'green', inventory: '29 in stock', type: 'Electronics', vendor: 'TechSound Co.', color: PRODUCT_COLORS[2] },
  { id: 12, name: 'Canvas Backpack 30L', status: 'Draft', statusV: 'grey', inventory: '0 in stock', type: 'Bags', vendor: 'UrbanCarry', color: PRODUCT_COLORS[3] },
];

const TABS = [
  { id: 'all', label: 'All', count: 48 },
  { id: 'active', label: 'Active', count: 32 },
  { id: 'draft', label: 'Draft', count: 10 },
  { id: 'archived', label: 'Archived', count: 6 },
];

const COLUMNS = [
  { label: 'Product' },
  { label: 'Status' },
  { label: 'Inventory' },
  { label: 'Type' },
  { label: 'Vendor' },
];

const PAGE_SIZE = 8;

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = PRODUCTS.filter((p) => {
    const matchTab =
      activeTab === 'all' ? true :
      activeTab === 'active' ? p.status === 'Active' :
      activeTab === 'draft' ? p.status === 'Draft' :
      activeTab === 'archived' ? p.status === 'Archived' : true;

    const matchSearch = search
      ? p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.vendor.toLowerCase().includes(search.toLowerCase())
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
            <h1 className="page-title">Products</h1>
            <p className="page-subtitle">Manage your store's product catalog</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={15} />
            Add product
          </button>
        </div>
      </div>

      <Card>
        {/* Filter Tabs */}
        <div className="filter-tabs filter-tabs-padded">
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
        <div className="table-toolbar table-toolbar-padded">
          <div className="search-bar">
            <Search className="search-bar-icon" size={15} />
            <input
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
        </div>

        {/* Table */}
        <Table columns={COLUMNS}>
          {paginated.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="product-name-cell">
                  <div className="product-thumb" style={{ background: product.color }}>
                    <div className="product-thumb-inner" />
                  </div>
                  <div>
                    <div className="product-name-link">{product.name}</div>
                  </div>
                </div>
              </td>
              <td><Badge variant={product.statusV}>{product.status}</Badge></td>
              <td className="text-secondary">{product.inventory}</td>
              <td className="text-secondary">{product.type}</td>
              <td className="text-secondary">{product.vendor}</td>
            </tr>
          ))}
          {paginated.length === 0 && (
            <tr>
              <td colSpan={5} className="td-empty">
                No products found
              </td>
            </tr>
          )}
        </Table>

        {/* Pagination */}
        <div className="pagination">
          <span className="pagination-info">
            {filtered.length > 0
              ? `${start}–${end} of ${filtered.length} products`
              : '0 products'}
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
