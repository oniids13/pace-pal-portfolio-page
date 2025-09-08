import Heading from "./body_content/Heading";
import Background from "./body_content/Background";
import Research from "./body_content/Research";
import ProductStructure from "./body_content/ProductStructure";

const Body = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="card bg-base-100 shadow-md">
        <div className="card-body mx-auto">
          <Heading />
          <Background />
          <Research />
          <ProductStructure />
        </div>
      </div>
    </div>
  );
};

export default Body;
