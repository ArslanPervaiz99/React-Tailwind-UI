import ProductCard from "./ProductCard";
import { fruitAndVegi } from "./products";

const FeatureFruitsVegi = () => {
  return (
    <div className="container pt-16 ">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl ">Fruites & Vegitables</h3>
          <p className="text-gray-600 mt-2">
            Buy Farm Fresh Fruits and Vegitables online at the Best Price
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="featureBtn ">Fruits</button>
          <button className=" text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className=" text-gray-600 hover:text-accent">
            Dry Fruits{" "}
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 pt-8 gap-2 mb-6 ">
        <div>
          <img
            src="/feature_1.webp"
            alt="Banner"
            className="w-full rounded-lg object-cover h-full"
          />
        </div>
        {fruitAndVegi.map((fruitAndVegiProd) => (
          <ProductCard
            key={fruitAndVegiProd.id}
            {...fruitAndVegiProd}
            // name={product.name}
            // img={product.img}
            // price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureFruitsVegi;
