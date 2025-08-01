import React from 'react';

const MenuButton = () => {
  return (
    <div
      className="menu-button xl:hidden rounded border py-1 px-2 inline-block ml-2"
      aria-label="Open menu"
    >
      <label htmlFor="menu" className="flex items-center mb-0 cursor-pointer">
        <i className="fas fa-bars w-6 text-lg"></i>
        <span className="text-sm">Menu</span>
      </label>
    </div>
  );
};

export default MenuButton;
