import * as React from 'react'

import style from './TodoForm.module.css'

import { TodoContext } from '../../context/todoContext'
import { TodoContextType } from '../../types/todo'

import Button from '../UI/Button'

export default function TodoForm() {
  const { addTodo } = React.useContext(TodoContext) as TodoContextType
  const [text, setText] = React.useState('')

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (text) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <section className={style.todoFormContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='What else?'
          maxLength={25}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='submit' title='Add'>
          new ToDo
        </Button>
      </form>
    </section>
  )
}
