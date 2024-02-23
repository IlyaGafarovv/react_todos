export interface ITodo {
  text: string
  isCompleted: boolean
  id: string
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
