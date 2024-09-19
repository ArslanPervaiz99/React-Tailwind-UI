import CatCard from "./CatCard";
import { products } from "./products";

const Cat = () => {
  return (
    <div className="container pt-16 ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((products) => (
          <CatCard key={products.id} {...products} />
        ))}
      </div>
    </div>
  );
};

export default Cat;
