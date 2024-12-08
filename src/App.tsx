import './App.css'
import axios from 'axios'
import {useEffect, useState} from "react";
const baseUrl = 'http://localhost:3000'

interface Todo {
  id: string
  task: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState<string | null>(null)
  
  const getTodoData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/todos`)
      console.log(response)
      setTodos(response.data)
    } catch (error) {
      console.error('Error fetching todo data:', error)
      setError('Failed to fetch data')
    }
  }
  
  useEffect(() => {
    getTodoData()
  }, [])
  
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.task}</strong> - {todo.completed ? 'Done' : 'Pending'}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
