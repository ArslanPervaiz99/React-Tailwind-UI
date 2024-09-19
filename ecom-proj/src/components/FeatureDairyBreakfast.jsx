import DairyBreakfastProductCard from "./DairyBreakfastProductCard";
import { dairy } from "./products";

const FeatureDairyBreakfast = () => {
  return (
    <div className="container pt-16 ">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl ">Breakfast & Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy best Quality Breakfast Products online from Big Basket stop near
            you.
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="featureBtn ">Eggs & Dairy</button>
          <button className=" text-gray-600 hover:text-accent">Pizza</button>
          <button className=" text-gray-600 hover:text-accent">
            Bread and Cookies{" "}
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 pt-8 gap-2 mb-6 ">
        <div>
          <img
            src="/feature_2.webp"
            alt="Banner"
            className="w-full rounded-lg object-cover h-full"
          />
        </div>
        {dairy.map((dairyprod) => (
          <DairyBreakfastProductCard
            key={dairyprod.id}
            {...dairyprod}
            // name={product.name}
            // img={product.img}
            // price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureDairyBreakfast;
