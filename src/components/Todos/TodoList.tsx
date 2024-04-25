import { useContext } from 'react'

import style from './TodoList.module.css'

import { TodoContext } from 'context/todoContext'
import { TodoContextType } from 'types/todo'

import { Todo } from './Todo'

export const TodoList = () => {
  const { todos } = useContext(TodoContext) as TodoContextType

  return (
    <ul>
      {!todos.length && <h2 className={style.title}>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
