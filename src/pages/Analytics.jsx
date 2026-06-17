import React, { useState } from 'react';
import StatCard from '../components/StatCard.jsx';
import Card from '../components/Card.jsx';
import { Calendar, TrendingUp } from 'lucide-react';

const DAILY_DATA = [
  { day: 'Mon', value: 4200, label: '$4.2K' },
  { day: 'Tue', value: 6800, label: '$6.8K' },
  { day: 'Wed', value: 5400, label: '$5.4K' },
  { day: 'Thu', value: 8900, label: '$8.9K' },
  { day: 'Fri', value: 12400, label: '$12.4K' },
  { day: 'Sat', value: 7600, label: '$7.6K' },
  { day: 'Sun', value: 3000, label: '$3.0K' },
];

const CHANNELS = [
  { name: 'Direct', pct: 45, color: '#008060' },
  { name: 'Organic Search', pct: 30, color: '#5C6AC4' },
  { name: 'Social Media', pct: 15, color: '#47C1BF' },
  { name: 'Email', pct: 10, color: '#F49342' },
];

const Y_LABELS = ['$15K', '$10K', '$5K', '$0'];

const maxValue = Math.max(...DAILY_DATA.map(d => d.value));

export default function Analytics() {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Analytics</h1>
            <p className="page-subtitle">Track your store's performance and trends</p>
          </div>
          <button className="btn btn-secondary">
            <Calendar size={15} />
            Jun 1 – Jun 17, 2026
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="stat-cards-grid">
        <StatCard label="Total Revenue" value="$48,290.00" change={12.5} />
        <StatCard label="Sessions" value="32,847" change={6.3} />
        <StatCard label="Conversion Rate" value="3.8%" change={-0.4} />
        <StatCard label="Avg. Order Value" value="$87.40" change={4.1} />
      </div>

      {/* Sales Chart + Channels Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', marginTop: '8px' }}>
        {/* Bar Chart */}
        <Card title="Sales by day">
          <div className="chart-container">
            <div style={{ display: 'flex', gap: '16px' }}>
              {/* Y Axis Labels */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingBottom: '28px',
                minWidth: '36px',
              }}>
                {Y_LABELS.map((label) => (
                  <span
                    key={label}
                    style={{
                      fontSize: 11,
                      color: 'var(--color-text-subdued)',
                      textAlign: 'right',
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Bars */}
              <div style={{ flex: 1 }}>
                {/* Grid lines */}
                <div style={{
                  position: 'relative',
                  height: 180,
                  marginBottom: 8,
                }}>
                  {[0, 33.3, 66.6, 100].map((pct, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        top: `${pct}%`,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: pct === 100 ? 'var(--color-border)' : 'var(--color-border)',
                        opacity: pct === 0 ? 0 : 0.7,
                      }}
                    />
                  ))}

                  {/* Bar groups */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 8,
                    paddingBottom: 0,
                  }}>
                    {DAILY_DATA.map((d, i) => {
                      const heightPct = (d.value / 15000) * 100;
                      const isHovered = hoveredBar === i;
                      return (
                        <div
                          key={d.day}
                          style={{
                            flex: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            cursor: 'pointer',
                            position: 'relative',
                          }}
                          onMouseEnter={() => setHoveredBar(i)}
                          onMouseLeave={() => setHoveredBar(null)}
                        >
                          {/* Tooltip */}
                          {isHovered && (
                            <div style={{
                              position: 'absolute',
                              bottom: `${heightPct + 2}%`,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              background: 'var(--color-text-primary)',
                              color: 'white',
                              padding: '3px 8px',
                              borderRadius: 4,
                              fontSize: 11,
                              whiteSpace: 'nowrap',
                              zIndex: 10,
                              pointerEvents: 'none',
                            }}>
                              {d.label}
                              <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 0,
                                height: 0,
                                borderLeft: '4px solid transparent',
                                borderRight: '4px solid transparent',
                                borderTop: '4px solid var(--color-text-primary)',
                              }} />
                            </div>
                          )}
                          <div
                            style={{
                              width: '100%',
                              height: `${heightPct}%`,
                              background: isHovered ? 'var(--color-primary-hover)' : 'var(--color-primary)',
                              borderRadius: '3px 3px 0 0',
                              transition: 'background 0.15s ease, height 0.3s ease',
                              minHeight: 2,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* X Axis Labels */}
                <div style={{
                  display: 'flex',
                  gap: 8,
                }}>
                  {DAILY_DATA.map((d) => (
                    <div
                      key={d.day}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        fontSize: 12,
                        color: 'var(--color-text-subdued)',
                        marginTop: 6,
                      }}
                    >
                      {d.day}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary row */}
            <div style={{
              marginTop: 16,
              paddingTop: 16,
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              gap: 32,
            }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--color-text-subdued)', marginBottom: 2 }}>Total this week</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>$48,300</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--color-text-subdued)', marginBottom: 2 }}>Peak day</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>Friday</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--color-text-subdued)', marginBottom: 2 }}>Daily average</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>$6,900</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Top Channels */}
        <Card title="Top channels">
          <div className="card-body">
            {CHANNELS.map((channel) => (
              <div key={channel.name} className="channel-item">
                <div className="channel-row">
                  <span className="channel-name">{channel.name}</span>
                  <span className="channel-pct">{channel.pct}%</span>
                </div>
                <div className="channel-bar-track">
                  <div
                    className="channel-bar-fill"
                    style={{
                      width: `${channel.pct}%`,
                      background: channel.color,
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Legend */}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-subdued)', marginBottom: 10 }}>Sessions by source</div>
              {CHANNELS.map((ch) => (
                <div key={ch.name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: ch.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', flex: 1 }}>{ch.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)' }}>
                    {Math.round(32847 * ch.pct / 100).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
        {/* Top Locations */}
        <Card title="Top locations">
          <div className="card-body">
            {[
              { city: 'New York, US', sessions: 8432, pct: 25.7 },
              { city: 'Los Angeles, US', sessions: 5124, pct: 15.6 },
              { city: 'Chicago, US', sessions: 3891, pct: 11.9 },
              { city: 'London, UK', sessions: 2847, pct: 8.7 },
              { city: 'Toronto, CA', sessions: 2103, pct: 6.4 },
            ].map((loc, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '8px 0',
                  borderBottom: i < 4 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <span style={{ width: 20, fontSize: 13, fontWeight: 600, color: 'var(--color-text-subdued)', textAlign: 'center' }}>
                  {i + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, color: 'var(--color-text-primary)', marginBottom: 3 }}>{loc.city}</div>
                  <div style={{ height: 4, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${loc.pct * 4}%`, background: 'var(--color-primary)', borderRadius: 2 }} />
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{loc.sessions.toLocaleString()}</div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-subdued)' }}>{loc.pct}%</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Device Breakdown */}
        <Card title="Device breakdown">
          <div className="card-body">
            {[
              { device: 'Mobile', sessions: 18066, pct: 55 },
              { device: 'Desktop', sessions: 11496, pct: 35 },
              { device: 'Tablet', sessions: 3285, pct: 10 },
            ].map((d, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 0',
                  borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>{d.device}</span>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{d.pct}%</span>
                  </div>
                  <div style={{ height: 8, background: 'var(--color-border)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${d.pct}%`,
                      background: i === 0 ? '#5C6AC4' : i === 1 ? '#47C1BF' : '#F49342',
                      borderRadius: 4,
                    }} />
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-subdued)', marginTop: 4 }}>
                    {d.sessions.toLocaleString()} sessions
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
