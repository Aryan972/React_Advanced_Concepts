import { useState} from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar';

function App() {

  const [progress, setProgress] = useState();


  return (
    <div className="App">
      <h1> Progress Bar </h1>
      <label>
        Enter Progress:
        <input 
          type="number"
          value={progress}
          placeholder="Enter your progress"
          onChange={(e) => setProgress((e.target.value))}
        />
      </label>
      <ProgressBar progress={progress}/>
    </div>
    
  );
}

export default App
