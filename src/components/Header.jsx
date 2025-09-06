const Header = () => {
  return (
    <header className="">
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
              <a href="#home" className="font-medium">
                Background
              </a>
            </li>
            <li>
              <a href="#about" className="font-medium">
                Research
              </a>
            </li>
            <li>
              <a href="#services" className="font-medium">
                Product Structure
              </a>
            </li>
            <li>
              <a href="#contact" className="font-medium">
                Design Solutions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
