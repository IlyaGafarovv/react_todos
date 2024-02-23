import { useContext } from 'react'

import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { BsFileEarmarkRichtext } from 'react-icons/bs'
import { BiSolidTrashAlt } from 'react-icons/bi'

import style from './Todo.module.css'

import { TodoContext } from '../../context/todoContext'
import { ITodo, TodoContextType } from '../../types/todo'

type Props = {
  todo: ITodo
}

export default function Todo({ todo }: Props) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext) as TodoContextType

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
