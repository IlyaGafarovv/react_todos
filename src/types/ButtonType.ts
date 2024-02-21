import { ReactNode } from 'react'

export type ButtonType = {
  title?: string
  disabled?: boolean
  children?: ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
