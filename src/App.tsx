import './App.css'
import {useState} from 'react'
import TodoList from "./components/TodoList.tsx"
import defaultBaseUrl from "./utils/baseUrl.ts"
import BaseUrlInput from "./components/BaseUrlInput.tsx";

function App() {
  const [baseUrl, setBaseUrl] = useState<string>(defaultBaseUrl)
  
  return (
    <>
      <BaseUrlInput baseUrl={baseUrl} setBaseUrl={setBaseUrl} defaultBaseUrl={defaultBaseUrl} />
      <TodoList baseUrl={baseUrl}/>
    </>
  )
}

export default App
