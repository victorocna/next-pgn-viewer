import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <>
      <input
        type="checkbox"
        id="menu"
        className="hidden"
        aria-label="Menu open/close"
      />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop bg-gray-300 fixed lg:hidden h-screen w-screen inset-0"
      />
      <nav className="nav-menu overflow-y-auto">
        <div className="flex flex-col py-8 lg:sticky lg:top-0">
          <MenuItem href="/">Basic example</MenuItem>
          <MenuItem href="/light">Light theme</MenuItem>
          <MenuItem href="/editor">PGN editor</MenuItem>
        </div>
      </nav>
    </>
  );
};

export default Menu;
