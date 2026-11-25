import React from 'react';
import { IconSearch } from './Icons';

export const SearchBar = ({ placeholder = "Search courses, notices, events...", value, onChange }) => {
  return (
    <div className="search-bar">
      <span className="search-icon">
        <IconSearch size={18} />
      </span>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};
