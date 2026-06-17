import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import { Store, CreditCard, Truck, Bell, Shield, Globe, ChevronRight } from 'lucide-react';

const SETTINGS_SECTIONS = [
  { icon: Store, label: 'Store details', description: 'Edit your store name, address, and timezone', color: '#5C6AC4' },
  { icon: CreditCard, label: 'Payments', description: 'Manage payment providers and checkout settings', color: '#008060' },
  { icon: Truck, label: 'Shipping and delivery', description: 'Set up shipping rates, zones, and delivery methods', color: '#47C1BF' },
  { icon: Bell, label: 'Notifications', description: 'Configure order and shipping notification emails', color: '#F49342' },
  { icon: Shield, label: 'Policies', description: 'Return policy, privacy policy, and terms of service', color: '#DE3618' },
  { icon: Globe, label: 'Domains', description: 'Manage your store domains and SSL certificates', color: '#95BF47' },
];

export default function Settings() {
  const [storeName, setStoreName] = useState('MyShop');
  const [email, setEmail] = useState('alex@myshop.com');
  const [phone, setPhone] = useState('+1 (555) 012-3456');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Settings</h1>
            <p className="page-subtitle">Manage your store configuration and preferences</p>
          </div>
        </div>
      </div>

      <div className="settings-grid">
        {SETTINGS_SECTIONS.map((section, i) => {
          const Icon = section.icon;
          return (
            <div key={i} className="card settings-card-item"
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
            >
              <div className="settings-card-body">
                <div className="settings-card-left">
                  <div className="settings-card-icon" style={{ background: `${section.color}18` }}>
                    <Icon size={18} color={section.color} />
                  </div>
                  <div>
                    <div className="settings-card-label">{section.label}</div>
                    <div className="settings-card-desc">{section.description}</div>
                  </div>
                </div>
                <ChevronRight size={16} color="var(--color-text-subdued)" className="settings-card-chevron" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Store Details Form */}
      <Card title="Store details">
        <div className="card-body settings-form-body">
          <div className="settings-form-grid">
            <div>
              <label className="settings-form-label">Store name</label>
              <input type="text" className="settings-form-input" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
            </div>
            <div>
              <label className="settings-form-label">Account email</label>
              <input type="email" className="settings-form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="settings-form-label">Phone number</label>
              <input type="tel" className="settings-form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label className="settings-form-label">Industry</label>
              <select className="settings-form-select">
                <option>Clothing and accessories</option>
                <option>Electronics</option>
                <option>Home and garden</option>
                <option>Sports and outdoors</option>
              </select>
            </div>
          </div>

          <div className="settings-form-actions">
            <button className="btn btn-primary" onClick={handleSave}>
              {saved ? '✓ Saved' : 'Save changes'}
            </button>
            <button className="btn btn-secondary">Discard</button>
            {saved && <span className="settings-save-msg">Settings saved successfully</span>}
          </div>
        </div>
      </Card>
    </div>
  );
}
