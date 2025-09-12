const DesignSolutions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              src="/src/images/Paper-wireframe.jpg"
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
            <img
              className="border-2 border-gray-300 w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
              src="/src/images/LoFi1.png"
              alt="Low Fidelity Wireframe 1"
            />
            <img
              className="border-2 border-gray-300  w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
              src="/src/images/LoFi2.png"
              alt="Low Fidelity Wireframe 2"
            />
            <img
              className="border-2 border-gray-300  w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
              src="/src/images/LoFi3.png"
              alt="Low Fidelity Wireframe 3"
            />
            <img
              className="border-2 border-gray-300  w-full max-w-40 h-auto object-contain rounded-lg shadow-md"
              src="/src/images/LoFi4.png"
              alt="Low Fidelity Wireframe 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSolutions;
