const Heading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          PacePal
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Mobile platform for easy run scheduling and building connections
          through running.
        </p>
      </div>

      {/* Main Content: Grid on Left, Images on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side: 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Project type
            </h3>
            <p className="text-gray-600">Design Project Google UI/UX course</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Deliverables
            </h3>
            <p className="text-gray-600">Mobile app mockups</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tools</h3>
            <p className="text-gray-600">Figma</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Duration
            </h3>
            <p className="text-gray-600">2 weeks</p>
          </div>
        </div>

        {/* Right Side: Images Placeholder */}
        <div className="space-y-4">
          <div className=" rounded-lg aspect-square flex items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src="/src/images/home-screen.png"
              alt="Home Screen"
            />
            <img
              className="w-full h-full object-cover"
              src="/src/images/run-detail.png"
              alt="Home Screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
