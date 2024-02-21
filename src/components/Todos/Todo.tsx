import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { BsFileEarmarkRichtext } from 'react-icons/bs'
import { BiSolidTrashAlt } from 'react-icons/bi'

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
      <BsFileEarmarkRichtext className={style.todoIcon} />
      <h4 className={style.todoText}>{todo.text}</h4>

      <BiSolidTrashAlt
        className={style.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
        title='Delete Todo'
      />
      <IoCheckmarkDoneOutline
        className={style.checkIcon}
        onClick={() => toggleTodo(todo.id)}
        title='Mark as Completed'
      />
    </div>
  )
}
