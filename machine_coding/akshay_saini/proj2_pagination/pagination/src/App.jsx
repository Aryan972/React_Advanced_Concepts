import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination';
import { PAGE_SIZE} from './constants';

// import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);   

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
  let start = currentPage * PAGE_SIZE;
  let end = start + PAGE_SIZE;

  

  return (
    <div className="App">
      <h1>Pagination</h1>

      <div className="pagination-container">
        <Pagination 
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
      </div>

      <div className="products-container">
        {products && products.slice(start, end).map((p) => (
        <ProductCard key={p.id} image = {p.thumbnail} title = {p.title} />
        ))}
      </div>
      
    </div>
  );
}
