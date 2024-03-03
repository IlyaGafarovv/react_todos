import { useContext } from 'react'

import style from './TodoList.module.css'

import { TodoContext } from 'context/todoContext'
import { TodoContextType } from 'types/todo'

import Todo from './Todo'

export default function TodoList() {
  const { todos } = useContext(TodoContext) as TodoContextType

  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
