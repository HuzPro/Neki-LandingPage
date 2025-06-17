import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();

  if (cartItems.length === 0) return <div className="padding">🛒 Your cart is empty</div>;

  return (
    <section className="max-container padding">
      <h2 className="text-3xl font-palanquin font-bold mb-6">Shopping Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex gap-4 items-center">
              <img src={`http://localhost:8000${item.imgURL}`} alt={item.name} className="w-20 h-20 object-contain" />
              <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-slate-gray">{item.price} × {item.quantity}</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
        <div className="text-right mt-6">
            <p className="text-2xl font-bold">Total: ${getCartTotal.toFixed(2)}</p>
            <div className="mt-4 flex justify-end gap-4">
              <Button label="Clear Cart" onClick={clearCart} />
              <Button label="Checkout" />
            </div>
        </div>

    </section>
  );
};

export default Cart;
