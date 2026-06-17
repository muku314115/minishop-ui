import React from 'react';

/**
 * variant: 'green' | 'yellow' | 'red' | 'grey' | 'blue'
 */
export default function Badge({ children, variant = 'grey' }) {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
    </span>
  );
}
