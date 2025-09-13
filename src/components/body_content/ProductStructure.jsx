const ProductStructure = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      id="product-structure"
    >
      <h1 className="text-sky-600 text-3xl font-bold mb-12 text-center">
        PRODUCT STRUCTURE
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-600 mb-8 text-base max-w-4xl mx-auto text-justify">
          Based on the opportunity areas I summarized, I defined PacePal's
          product structure. Users can view run events that are near in their
          area on the home screen and a CTA button in scheduling a run. There
          are also buttons for search, run history, runner's profile, and
          notifications.
        </p>
        <div className="flex justify-center">
          <img
            className="w-150 h-auto object-contain rounded-lg shadow-md"
            src="/src/images/IA.png"
            alt="Product Structure"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductStructure;
