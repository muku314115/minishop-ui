import React from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  BarChart2,
  Megaphone,
  Tag,
  Settings,
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'discounts', label: 'Discounts', icon: Tag },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">S</div>
        <span className="sidebar-logo-text">MyShop</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <div
              key={item.id}
              className={`nav-item${isActive ? ' active' : ''}`}
              onClick={() => onNavigate(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="nav-icon" size={18} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* User */}
      <div className="sidebar-user">
        <div className="user-avatar">AJ</div>
        <div className="user-info">
          <div className="user-name">Alex Johnson</div>
          <div className="user-role">Store owner</div>
        </div>
      </div>
    </aside>
  );
}
