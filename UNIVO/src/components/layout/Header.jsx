import React from 'react';
import { SearchBar } from '../common/SearchBar';
import { IconBell, IconMenu } from '../common/Icons';

export const Header = ({ currentTitle, onToggleMobileMenu, searchValue, onSearchChange }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <button
          className="icon-btn mobile-menu-btn"
          onClick={onToggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <IconMenu size={20} />
        </button>
        <h2>{currentTitle}</h2>
      </div>

      <div className="header-right">
        <SearchBar value={searchValue} onChange={onSearchChange} />
        <button className="icon-btn" aria-label="Notifications">
          <IconBell size={19} />
          <span className="badge-dot"></span>
        </button>
      </div>
    </header>
  );
};
