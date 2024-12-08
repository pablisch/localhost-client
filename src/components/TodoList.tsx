import axios from 'axios'
import {useEffect, useState} from "react";
import {Todo} from "../types/todo.types.ts";
import baseUrl from "../utils/baseUrl.ts";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoError, setTodoError] = useState<string | null>(null)
  
  const getTodoData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/todos`)
      // console.log("response in TodoList:", response.data)
      setTodos(response.data)
    } catch (error) {
      console.error('Error fetching todo data:', error)
      setTodoError('Failed to fetch data')
    }
  }
  
  useEffect(() => {
    getTodoData()
  }, [])
  
  return (
    <>
      {todoError ? (
        <p>{todoError}</p>
      ) : todos.length > 0 ? (
        <div>
          {todos.map((todo) => (
            <div key={todo._id}>
              <h1>Task: <strong>{todo.task}</strong></h1>
              <p>Completed: {todo.completed ? "Yes" : "No"}</p>
              <p>ID: {todo._id}</p>
              <p>Created at: {new Date(todo.createdAt).toLocaleString()}</p>
              <p>Updated at: {new Date(todo.updatedAt).toLocaleString()}</p>
            </div>
              ))}
            </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default TodoList