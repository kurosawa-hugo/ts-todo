import React, {FC, useState} from "react"
import Form from "./Form"
import List from "./List"
import {nanoid} from "nanoid"
import "./style.css/app.css"

interface TodosState {
  content: string;
  id: string;
}

const App: FC = () => {
  const [todos, setTodos] = useState<TodosState[]>([])

const addTodo = (text:string) => {
  setTodos([...todos, {content: text, id: nanoid()}])
}

const deleteTodo = (id:string) => {
  setTodos(todos.filter(todo => todo.id !== id))
}

  return (
    <div className="app">
      <h1>Todo App</h1>
      <Form addTodo={addTodo}/>
      <List todos={todos}
            deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App