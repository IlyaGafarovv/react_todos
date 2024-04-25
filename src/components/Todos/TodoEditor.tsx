import { useState, useContext } from 'react'
import { BsFileEarmarkRichtext } from 'react-icons/bs'
import { IoCheckmarkOutline } from 'react-icons/io5'

import style from './TodoEditor.module.css'
import { TodoContext } from 'context/todoContext'
import { TodoContextType } from 'types/todo'

interface Props {
  id: string
  text: string
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

export const TodoEditor = ({ id, text, setIsEditing }: Props) => {
  const { editTodo } = useContext(TodoContext) as TodoContextType
  const [editText, setEditText] = useState<string>(text)

  const handleEditTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value)
  }

  const handleSaveEditedTodo = (id: string) => {
    editTodo(id, editText)
    setIsEditing(false)
  }

  return (
    <div className={style.container}>
      <BsFileEarmarkRichtext className={style.editorIcon} />
      <input
        className={style.input}
        type='text'
        value={editText}
        onChange={handleEditTodo}
        maxLength={25}
        autoFocus
      />
      <IoCheckmarkOutline
        className={style.icon}
        onClick={() => handleSaveEditedTodo(id)}
      />
    </div>
  )
}
