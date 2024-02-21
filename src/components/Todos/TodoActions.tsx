import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'

import style from './TodoActions.module.css'

import Button from '../UI/Button'

type Props = {
  deleteCompletedTodos: () => void
  resetTodos: () => void
  completedTodosExist: boolean
}

export default function TodoActions({
  deleteCompletedTodos,
  resetTodos,
  completedTodosExist,
}: Props) {
  return (
    <div className={style.todoActionsContainer}>
      <Button title='Reset All Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title='Delete Completed Todos'
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <IoMdTrash />
      </Button>
    </div>
  )
}
