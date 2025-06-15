import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const Products = () => {
  return (
    <section className="max-container padding">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Full</span> Collection
        </h1>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Browse through our entire collection of questionable taste and outstanding mediocrity. Some of these even have laces!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
