const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="navbar bg-base-100 shadow-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo on the left */}
        <div className="navbar-start">
          <a href="/">
            <img
              className="w-30"
              src="/images/personal_logo.png"
              alt="PacePal Logo"
            />
          </a>
        </div>

        {/* Mobile hamburger menu */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
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

        {/* Desktop nav menu */}
        <div className="navbar-end hidden lg:flex">
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
