import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const PopularProducts = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("http://localhost:8000/shoes/");
        const data = await response.json();
        setShoes(data.slice(0, 4)); // Only use the first 4
      } catch (error) {
        console.error("Failed to fetch shoes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience mid-tier quality and ok style with our barely-bought selections. Discover a world of design, value (or lack thereof), and comfort (lol).
        </p>
      </div>

      {loading ? (
        <p className="mt-10 text-center text-lg font-montserrat text-slate-gray">Loading popular shoes...</p>
      ) : (
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {shoes.map((shoe) => (
            <ProductCard key={shoe.id} {...shoe} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularProducts;
