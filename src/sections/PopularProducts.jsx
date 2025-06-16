import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience mid-tier quality and ok style with our barely-bought selections. Discover a world of design, value(or lack there of), and comfort(lol).</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <ProductCard key= {product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
