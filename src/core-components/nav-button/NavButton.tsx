import { Link } from "react-router-dom"
import "./NavButton.css"

interface NavButtonProps {
  label: string,
  path: string,
  styleType: NavButtonStyles
}

export type NavButtonStyles = "light-blue" | "dark-blue" | "link-style"


export const NavButton : React.FC<NavButtonProps> = ({label, path, styleType}) => {
  return <>
    <button className={`NavButton-${styleType}`}>
      <Link to={path}>{label}</Link>
    </button>
  </>
}