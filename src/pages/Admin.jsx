import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [shoes, setShoes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    image: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("neki_token");
    if (!token) return navigate("/");

      console.log(token)

    fetch("http://localhost:8000/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.email !== "admin@neki.com") navigate("/");
        else setUserEmail(data.email);
      });

    fetch("http://localhost:8000/shoes/")
      .then((res) => res.json())
      .then(setShoes);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleAddShoe = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("neki_token");
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    try {
      const res = await fetch("http://localhost:8000/shoes/", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      const newShoe = await res.json();
      setShoes([...shoes, newShoe]);
    } catch (err) {
      console.error("Failed to add shoe", err);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("neki_token");
    try {
      await fetch(`http://localhost:8000/shoes/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setShoes(shoes.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Failed to delete shoe", err);
    }
  };

  return (
    <section className="max-container padding">
      <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>

      {/* Add Shoe Form */}
      <form
        onSubmit={handleAddShoe}
        className="flex flex-col gap-4 border p-4 rounded"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          required
        />
        <button className="bg-coral-red text-white px-4 py-2 rounded" type="submit">
          Add Shoe
        </button>
      </form>

      {/* Remove Shoes */}
      <h2 className="text-2xl font-bold mt-10">Current Shoes</h2>
      <ul className="mt-4">
        {shoes.map((shoe) => (
          <li key={shoe.id} className="flex justify-between items-center mb-2">
            <span>{shoe.name}</span>
            <button
              onClick={() => handleDelete(shoe.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminPanel;
