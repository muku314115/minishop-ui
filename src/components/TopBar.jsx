import React, { useState } from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

export default function TopBar() {
  const [search, setSearch] = useState('');

  return (
    <header className="topbar">
      {/* Search */}
      <div className="topbar-search">
        <Search className="topbar-search-icon" size={16} />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
      </div>

      {/* Actions */}
      <div className="topbar-actions">
        <button
          className="topbar-icon-btn"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell size={18} />
          <span className="topbar-notif-badge" aria-label="3 unread notifications" />
        </button>

        <button
          className="topbar-icon-btn"
          aria-label="Help"
          title="Help"
        >
          <HelpCircle size={18} />
        </button>

        <div
          className="topbar-avatar"
          role="button"
          tabIndex={0}
          aria-label="User menu — Alex Johnson"
          title="Alex Johnson"
        >
          AJ
        </div>
      </div>
    </header>
  );
}
