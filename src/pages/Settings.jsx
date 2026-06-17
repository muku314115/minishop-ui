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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
        {SETTINGS_SECTIONS.map((section, i) => {
          const Icon = section.icon;
          return (
            <div
              key={i}
              className="card"
              style={{ cursor: 'pointer', transition: 'box-shadow 0.15s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
            >
              <div style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ display: 'flex', gap: 12, flex: 1 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: `${section.color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color={section.color} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{section.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{section.description}</div>
                  </div>
                </div>
                <ChevronRight size={16} color="var(--color-text-subdued)" style={{ flexShrink: 0, marginTop: 4 }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Store Details Form */}
      <Card title="Store details">
        <div className="card-body" style={{ maxWidth: 600 }}>
          <div style={{ display: 'grid', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--color-text-primary)' }}>
                Store name
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                style={{
                  width: '100%',
                  height: 36,
                  padding: '0 12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 4,
                  fontSize: 14,
                  color: 'var(--color-text-primary)',
                  background: 'var(--color-white)',
                  outline: 'none',
                  transition: 'border-color 0.15s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--color-text-primary)' }}>
                Account email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  height: 36,
                  padding: '0 12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 4,
                  fontSize: 14,
                  color: 'var(--color-text-primary)',
                  background: 'var(--color-white)',
                  outline: 'none',
                  transition: 'border-color 0.15s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--color-text-primary)' }}>
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  height: 36,
                  padding: '0 12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 4,
                  fontSize: 14,
                  color: 'var(--color-text-primary)',
                  background: 'var(--color-white)',
                  outline: 'none',
                  transition: 'border-color 0.15s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--color-text-primary)' }}>
                Industry
              </label>
              <select
                style={{
                  width: '100%',
                  height: 36,
                  padding: '0 12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 4,
                  fontSize: 14,
                  color: 'var(--color-text-primary)',
                  background: 'var(--color-white)',
                  outline: 'none',
                  cursor: 'pointer',
                  appearance: 'none',
                }}
              >
                <option>Clothing and accessories</option>
                <option>Electronics</option>
                <option>Home and garden</option>
                <option>Sports and outdoors</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: 20, display: 'flex', gap: 8, alignItems: 'center' }}>
            <button className="btn btn-primary" onClick={handleSave}>
              {saved ? '✓ Saved' : 'Save changes'}
            </button>
            <button className="btn btn-secondary">Discard</button>
            {saved && (
              <span style={{ fontSize: 13, color: 'var(--color-success)' }}>
                Settings saved successfully
              </span>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
