import React from 'react'
import './App.css'

import { Todo } from './types/Todo'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

export default function App() {
  const [todos, setTodos] = React.useState<Todo[]>([])

  return (
    <div className='app'>
      <div className='gradient' />

      <main className='main'>
        <h1 className='title'>
          todos <span>app</span>
        </h1>
        <TodoForm />
        <TodoList />
      </main>
    </div>
  )
}
