import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from '../components/Button';
import { star } from '../assets/icons';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/shoes/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="padding">Loading product...</div>;
  }

  if (!product) {
    return <div className="padding">Product not found</div>;
  }

  return (
    <section className="max-container padding flex flex-col lg:flex-row gap-10">
      <img
        src={`http://localhost:8000${product.imgURL}`}
        alt={product.name}
        className="w-full max-w-md object-contain"
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-palanquin font-bold">{product.name}</h1>
          <p className="text-coral-red text-2xl font-semibold mt-2">${product.price}</p>
          <div className="flex items-center gap-2 mt-2">
            <img src={star} alt="rating star" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">{product.rating}</p>
          </div>
          <p className="font-montserrat text-slate-gray mt-4">{product.description}</p>
        </div>

        <div className="mt-10">
          <Button label="Add to Cart" onClick={() => addToCart(product)} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

