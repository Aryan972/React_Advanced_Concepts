import { useState, useEffect } from 'react'

import './App.css'
import OtpInput from './components/OtpInput';

const OTP_DIGITS_COUNT = 6;
function App() {

  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));
  

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      <OtpInput inputArr = {inputArr} setInputArr={setInputArr}/>
    </div>
  )
}

export default App
