const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="navbar bg-base-100 shadow-md flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo on the left */}
        <div className="flex-1">
          <img
            className="w-30 "
            src="/src/images/personal_logo.png"
            alt="PacePal Logo"
          />
        </div>

        {/* Nav buttons on the right */}
        <div className="flex justify-between items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#background" className="font-medium">
                Background
              </a>
            </li>
            <li>
              <a href="#research" className="font-medium">
                Research
              </a>
            </li>
            <li>
              <a href="#product-structure" className="font-medium">
                Product Structure
              </a>
            </li>
            <li>
              <a href="#design-solutions" className="font-medium">
                Design Solutions
              </a>
            </li>
            <li>
              <a href="#conclussion" className="font-medium">
                Conclussion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
