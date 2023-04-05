import Background from './background';
import LinkResult from './LinkResult';
import InputForm from './InputForm';
import './App.css';
import { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="App">
      <InputForm setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <Background />
    </div>
  );
}

export default App;
