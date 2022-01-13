import { FC, ReactNode } from "react";
import './Button.css';

interface Props {
  children: ReactNode
}

export const Button:FC<Props> = ({children}) => {
  return (
    <button className="button">
      {children}
    </button>
  )
}