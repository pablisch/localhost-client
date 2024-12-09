import { useState } from 'react';
import './BaseUrlInput.css'

interface BaseUrlInputProps {
  baseUrl: string;
  setBaseUrl: (url: string) => void;
  defaultBaseUrl: string;
}

function BaseUrlInput({ baseUrl, setBaseUrl, defaultBaseUrl }: BaseUrlInputProps) {
  const [inputValue, setInputValue] = useState(baseUrl)
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  };
  
  const handleSetBaseUrl = () => {
    setBaseUrl(inputValue)
    console.log(baseUrl)
  };
  
  const handleResetBaseUrl = () => {
    setBaseUrl(defaultBaseUrl)
    setInputValue(defaultBaseUrl)
    console.log(baseUrl)
  };
  
  return (
    <div>
      <input
        id='base-url-input'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter new base URL"
      />
      <button onClick={handleSetBaseUrl}>Set Base URL</button>
      <button onClick={handleResetBaseUrl}>Reset</button>
    </div>
  );
}

export default BaseUrlInput;
