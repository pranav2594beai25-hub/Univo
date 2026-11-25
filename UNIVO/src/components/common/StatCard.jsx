import React from 'react';

export const StatCard = ({ label, value, trend, icon: Icon, color = 'blue' }) => {
  return (
    <div className="stat-card">
      {Icon && (
        <div className={`stat-icon-wrapper ${color}`}>
          <Icon size={24} />
        </div>
      )}
      <div className="stat-details">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
        {trend && <span className="stat-trend up">{trend}</span>}
      </div>
    </div>
  );
};
