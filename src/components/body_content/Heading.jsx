import { useEffect, useState } from "react";

const Heading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-800 ease-out ${
              isVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Project type
            </h3>
            <p className="text-gray-600">Design Project Google UI/UX course</p>
          </div>
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-800 ease-out ${
              isVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Deliverables
            </h3>
            <p className="text-gray-600">Mobile app mockups</p>
          </div>
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-800 ease-out ${
              isVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tools</h3>
            <p className="text-gray-600">Figma</p>
          </div>
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-800 ease-out ${
              isVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Duration
            </h3>
            <p className="text-gray-600">2 weeks</p>
          </div>
        </div>

        {/* Right Side: Images Placeholder */}
        <div className="space-y-4">
          <div className="rounded-lg aspect-square flex items-center justify-center gap-4">
            <img
              className={`w-1/2 h-full object-cover rounded-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform translate-x-full opacity-0"
              }`}
              src="/src/images/home-screen.png"
              alt="Home Screen"
              style={{ transitionDelay: "0.2s" }}
            />
            <img
              className={`w-1/2 h-full object-cover rounded-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform translate-x-full opacity-0"
              }`}
              src="/src/images/run-detail.png"
              alt="Run Detail Screen"
              style={{ transitionDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
