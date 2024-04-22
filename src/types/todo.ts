export interface ITodo {
  id: string
  text: string
  isCompleted: boolean
}

export type TodoContextType = {
  todos: ITodo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  deleteCompletedTodos: () => void
  resetTodos: () => void
  completedTodosCount: number
}
