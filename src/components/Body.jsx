import Heading from "./body_content/Heading";

const Body = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <Heading />
        </div>
      </div>
    </div>
  );
};

export default Body;
