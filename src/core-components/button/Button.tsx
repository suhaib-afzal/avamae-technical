import "./Button.scss";
import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode,
  styleType: ButtonStyle,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: ButtonType
}

export type ButtonStyle = "light-blue" | "dark-blue" | "link-style" | "light-blue-wide" | "dark-blue-wide"
export type ButtonType = "button" | "submit" | "reset" | undefined


export const Button : React.FC<ButtonProps> = ({children, onClick, styleType, type}) => {
  return <>
    <button className={`Button-${styleType}`} onClick={onClick} type={type}>
      {children}
    </button>
  </>
}