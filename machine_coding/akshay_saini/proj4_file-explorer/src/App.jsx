import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import json from './data.json';
import List from './components/List';

export default function App() {

  const [data, setData] = useState(json);

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List list={data}/>
    </div>
  )
}

