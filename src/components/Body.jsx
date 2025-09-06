import Heading from "./body_content/Heading";
import Background from "./body_content/Background";

const Body = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="card bg-base-100 shadow-md">
        <div className="card-body mx-auto">
          <Heading />
          <Background />
        </div>
      </div>
    </div>
  );
};

export default Body;
