import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard'
// import "./App.css";


const PAGE_SIZE = 10;
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

  const handlePageChange = (n) => {
    setCurrentPage(prev =>  n);
  }

  const goToPrevPage = () => {
    setCurrentPage(prev => prev - 1);
  }

  const goToNextPage = () => {
    setCurrentPage(prev => prev + 1);
  }

  return (
    <div className="App">
      <h1>Pagination</h1>

      <div className="pagination-container">
        <button disabled={currentPage === 0} onClick={() => goToPrevPage()}>⬅️</button>
        {[...Array(totalPages).keys()].map((n) =>(
          <button 
            className={"page-number " + (n === currentPage ? "active" : "")}
            key={n} 
            onClick={() => handlePageChange(n)}>{n}</button>
        ))}
        <button disabled={currentPage === totalPages-1} onClick={() => goToNextPage()}>➡️</button>
      </div>

      <div className="products-container">
        {products && products.slice(start, end).map((p) => (
        <ProductCard key={p.id} image = {p.thumbnail} title = {p.title} />
        ))}
      </div>
      
    </div>
  );
}
