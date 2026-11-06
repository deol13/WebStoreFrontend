import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setProducts)
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <p>Fel: {error}</p>;

  return (
    <div>
      <h1>WebStore</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} – {p.price} kr</li>
        ))}
      </ul>
    </div>
  );
 } // test 2

export default App;