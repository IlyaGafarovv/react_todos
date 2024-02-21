import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'

import { TodoType } from './types/TodoType'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodoActions'

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

  const handleDeleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const handleResetTodos = () => {
    setTodos([])
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className='app'>
      <div className='gradient' />

      <main className='main'>
        <h1 className='title'>
          todos <span>app</span>
        </h1>

        <TodoForm addTodo={handleAddTodo} />

        {!!todos.length && (
          <TodoActions
            deleteCompletedTodos={handleDeleteCompletedTodos}
            resetTodos={handleResetTodos}
            completedTodosExist={!!completedTodosCount}
          />
        )}

        <TodoList
          todos={todos}
          toggleTodo={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
        />

        {completedTodosCount > 0 && (
          <h2 className='subtitle'>{`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}</h2>
        )}
      </main>
    </div>
  )
}
