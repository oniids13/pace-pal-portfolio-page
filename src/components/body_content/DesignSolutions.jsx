const DesignSolutions = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      id="design-solutions"
    >
      <h1 className="text-sky-600 text-3xl font-bold mb-12 text-center">
        DESIGN SOLUTIONS
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold  text-center">Paper Wireframe</h2>

          <p className="text-gray-600 mt-5 mb-8 text-base max-w-4xl mx-auto text-center">
            I created paper wireframes to outline the basic structure of the
            app.
          </p>
          <div className="flex justify-center">
            <img
              className="w-150 h-auto object-contain rounded-lg shadow-md"
              src="/images/Paper-wireframe.jpg"
              alt="Paper Wireframe"
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Low Fidelity Wireframe
          </h2>
          <p className="text-gray-600 mb-8 text-base max-w-4xl mx-auto text-center">
            Transform the paper wireframes into digital low fidelity wireframes
            using Figma.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
            <div className="flex flex-col items-center gap-2">
              <img
                className="border-2 border-gray-300 w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
                src="/images/LoFi1.png"
                alt="Low Fidelity Wireframe 1"
              />
              <small>Home Screen</small>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="border-2 border-gray-300  w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
                src="/images/Lofi2.png"
                alt="Low Fidelity Wireframe 2"
              />
              <small>Run Detail Screen</small>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="border-2 border-gray-300  w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
                src="/images/LoFi3.png"
                alt="Low Fidelity Wireframe 3"
              />
              <small>Runner's Profile Screen</small>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="border-2 border-gray-300  w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
                src="/images/LoFi4.png"
                alt="Low Fidelity Wireframe 4"
              />
              <small>Run History Screen</small>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            High Fidelity Mockups
          </h2>
          <p className="text-gray-600 mb-8 text-base max-w-4xl mx-auto text-center">
            After usability testing the low fidelity wireframes, I made changes
            to the wireframes and created high fidelity mockups using Figma.
          </p>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi1.png"
              alt="High Fidelity Mockup 1"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi2.png"
              alt="High Fidelity Mockup 2"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi3.png"
              alt="High Fidelity Mockup 3"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi4.png"
              alt="High Fidelity Mockup 4"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi5.png"
              alt="High Fidelity Mockup 5"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi6.png"
              alt="High Fidelity Mockup 6"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi7.png"
              alt="High Fidelity Mockup 7"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi8.png"
              alt="High Fidelity Mockup 8"
            />
            <img
              className="border-2 border-gray-300 w-full max-w-60 h-auto object-contain rounded-lg shadow-md"
              src="/images/HiFi9.png"
              alt="High Fidelity Mockup 9"
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Visual Design</h2>
          <p className="text-gray-600 mb-8 text-base max-w-4xl mx-auto text-center">
            Color Scheme
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full shadow-lg border-2 border-gray-200"
                style={{ backgroundColor: "#2D9CDB" }}
              ></div>
              <p className="mt-3 text-sm font-mono text-gray-700">#2D9CDB</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full shadow-lg border-2 border-gray-200"
                style={{ backgroundColor: "#27AE60" }}
              ></div>
              <p className="mt-3 text-sm font-mono text-gray-700">#27AE60</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full shadow-lg border-2 border-gray-200"
                style={{ backgroundColor: "#F2994A" }}
              ></div>
              <p className="mt-3 text-sm font-mono text-gray-700">#F2994A</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full shadow-lg border-2 border-gray-200"
                style={{ backgroundColor: "#FF0000" }}
              ></div>
              <p className="mt-3 text-sm font-mono text-gray-700">#FF0000</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-5">
            <p className="text-gray-600 text-base max-w-4xl mx-auto text-center">
              Font Face
            </p>
            <img src="/images/FontFace.png" alt="Font Faces" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSolutions;
