import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoContextType, ITodo } from '../types/todo'

export const TodoContext = React.createContext<TodoContextType | null>(null)

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  const addTodo = (text: string) => {
    const newTodo: ITodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const resetTodos = () => {
    setTodos([])
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        deleteCompletedTodos,
        resetTodos,
        completedTodosCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
