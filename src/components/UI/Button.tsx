import style from './Button.module.css'

import { IButton } from 'types/button'

export default function Button(props: IButton) {
  const { children, disabled = false } = props

  return (
    <button {...props} className={style.button} disabled={disabled}>
      {children}
    </button>
  )
}
