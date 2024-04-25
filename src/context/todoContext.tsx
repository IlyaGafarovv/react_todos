import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoContextType, ITodo } from 'types/todo'

export const TodoContext = React.createContext<TodoContextType | null>(null)

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = React.useState<ITodo[]>(() => {
    const storedData = localStorage.getItem('todos')
    return storedData ? JSON.parse(storedData) : []
  })

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : { ...todo }
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
        editTodo,
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
