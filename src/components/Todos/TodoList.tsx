import style from './TodoList.module.css'

import { TodoType } from '../../types/TodoType'
import Todo from './Todo'

type Props = {
  todos: TodoType[]
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}
