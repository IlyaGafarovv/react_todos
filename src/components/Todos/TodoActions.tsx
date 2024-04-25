import { useContext } from 'react'

import { RiRefreshLine } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'

import style from './TodoActions.module.css'

import { TodoContextType } from 'types/todo'
import { TodoContext } from 'context/todoContext'

import Button from '../UI/Button'

export const TodoActions = () => {
  const { todos, resetTodos, deleteCompletedTodos } = useContext(
    TodoContext
  ) as TodoContextType

  if (!todos.length) return

  return (
    <div className={style.todoActionsContainer}>
      <Button title='Reset All Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button title='Delete Completed Todos' onClick={deleteCompletedTodos}>
        <IoMdTrash />
      </Button>
    </div>
  )
}
