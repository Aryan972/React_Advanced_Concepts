import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard'
// import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pagination</h1>
      <div className="products-container">
        {products && products.map((p) => (
        <ProductCard key={p.id} image = {p.thumbnail} title = {p.title} />
        ))}
      </div>
      
    </div>
  );
}
