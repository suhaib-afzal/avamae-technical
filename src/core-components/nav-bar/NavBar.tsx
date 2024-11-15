import { ReactNode } from "react"
import "./NavBar.css"

type NavBarProps = {
  image: string
  buttons: ReactNode[]
}

export const NavBar : React.FC<NavBarProps> = ({image, buttons}) => {
  return <header className="NavBar">
    <img src={image}/>
    <div >
      {buttons}
    </div>
  </header>
}