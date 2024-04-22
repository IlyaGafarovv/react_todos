import { useContext } from 'react'

import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { BsFileEarmarkRichtext } from 'react-icons/bs'
import { BiSolidTrashAlt } from 'react-icons/bi'

import style from './Todo.module.css'

import { TodoContext } from 'context/todoContext'
import { ITodo, TodoContextType } from 'types/todo'

export default function Todo({ id, text, isCompleted }: ITodo) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext) as TodoContextType

  return (
    <li className={`${style.todo} ${isCompleted ? style.completedTodo : ''}`}>
      <BsFileEarmarkRichtext className={style.todoIcon} />
      <h4 className={style.todoText}>{text}</h4>

      <BiSolidTrashAlt
        className={style.deleteIcon}
        title='Delete Todo'
        onClick={() => deleteTodo(id)}
      />
      <IoCheckmarkDoneOutline
        className={style.checkIcon}
        title='Mark as Completed'
        onClick={() => toggleTodo(id)}
      />
    </li>
  )
}
