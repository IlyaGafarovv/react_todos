import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

import style from './Todo.module.css'
import { TodoType } from '../../types/TodoType'

type Props = {
  todo: TodoType
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function Todo({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <div
      className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}
    >
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{todo.text}</div>

      <RiDeleteBin2Line
        className={style.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={style.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}
