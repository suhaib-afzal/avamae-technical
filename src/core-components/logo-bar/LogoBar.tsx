import { Link } from "react-router-dom"
import "./LogoBar.scss"

type LogoBarProps = {
  path: string,
  image: string
}

export const LogoBar : React.FC<LogoBarProps> = ({path, image}) => {
  return <div className="LogoBar">
    <Link to={path}>
      <img src={image}/>
    </Link>
  </div>
}