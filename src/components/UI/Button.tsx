import style from './Button.module.css'

import { ButtonType } from '../../types/ButtonType'

export default function Button(props: ButtonType) {
  const { children, disabled = false } = props

  return (
    <button {...props} className={style.button} disabled={disabled}>
      {children}
    </button>
  )
}
