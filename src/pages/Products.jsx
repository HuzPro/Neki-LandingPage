import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("http://localhost:8000/shoes/");
        const data = await response.json();
        setShoes(data);
      } catch (error) {
        console.error("Failed to fetch shoes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
      console.log(shoes)
  }, []);

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

      {loading ? (
        <p className="mt-10 text-center text-lg font-montserrat text-slate-gray">Loading shoes...</p>
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

export default Products;
