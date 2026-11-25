import React from 'react';

export const Card = ({ children, title, subtitle, action, className = "", hoverable = false }) => {
  return (
    <div className={`card ${hoverable ? 'card-hover' : ''} ${className}`}>
      {(title || subtitle || action) && (
        <div className="card-header">
          <div>
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
          {action && <div className="card-action">{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};
