import { useState, useContext } from 'react'

import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { BsFileEarmarkRichtext } from 'react-icons/bs'
import { BiSolidTrashAlt } from 'react-icons/bi'
import { MdModeEdit } from 'react-icons/md'

import style from './Todo.module.css'

import { TodoContext } from 'context/todoContext'
import { ITodo, TodoContextType } from 'types/todo'
import { TodoEditor } from './TodoEditor'

export const Todo = ({ id, text, isCompleted }: ITodo) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext) as TodoContextType
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      {isEditing ? (
        <TodoEditor id={id} text={text} setIsEditing={setIsEditing} />
      ) : (
        <li
          className={`${style.todo} ${isCompleted ? style.completedTodo : ''}`}
        >
          <BsFileEarmarkRichtext className={style.todoIcon} />
          <h4 className={style.todoText}>{text}</h4>

          <MdModeEdit
            className={style.editIcon}
            title='Edit Todo'
            onClick={() => setIsEditing(true)}
          />
          <IoCheckmarkDoneOutline
            className={style.checkIcon}
            title='Mark as Completed'
            onClick={() => toggleTodo(id)}
          />
          <BiSolidTrashAlt
            className={style.deleteIcon}
            title='Delete Todo'
            onClick={() => deleteTodo(id)}
          />
        </li>
      )}
    </>
  )
}
