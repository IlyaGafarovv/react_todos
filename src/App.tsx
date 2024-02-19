import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'

import { TodoType } from './types/TodoType'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

export default function App() {
  const [todos, setTodos] = React.useState<TodoType[]>([])

  const handleAddTodo = (text: string) => {
    const newTodo: TodoType = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='app'>
      <div className='gradient' />

      <main className='main'>
        <h1 className='title'>
          todos <span>app</span>
        </h1>
        <TodoForm addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          toggleTodo={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
        />
      </main>
    </div>
  )
}
