import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]); 
  const [showResults, setShowResults] = useState(false); //to show the result only when user clicks on input field
  const [cache, setCache] = useState({}); //to remeber the api calls ex- {mango:[], man: []}


  const fetchData = async () => {

    //if input field present in cache, then return it
    if(cache[input]) {
      console.log("Cache Return: ", input);
      setResults(cache[input]);
      return;
    }

    console.log("API Call: ", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();

    setResults(json?.recipes);
    setCache((prev) => ({...prev, [input]: json?.recipes})) // appending in the existing cache key: value pair
  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 500);

    return () => {
      clearTimeout(timer); //it's mandatory and will run while unmounting
    };

   }, [input]);

  return (
    <div className="App">
      <h1>AutoComplete Search Bar</h1>

      <div className='input-container'>
        <input 
          type='text' 
          value={input} 
          className="search-input"
          onChange={(e) => setInput(e.target.value)} 
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {showResults && <div className="results-container">
          {results.map((r) => (
            <span className="result" key={r.id}>
              {r.name}
            </span>
            
          ))}
        </div>}
      </div>
    </div>
  )
}

export default App
