import { ReactNode } from 'react'

export interface IButton {
  title?: string
  disabled?: boolean
  children?: ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
