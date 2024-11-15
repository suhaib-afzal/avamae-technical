import { NavImage } from "../nav-image/NavImage"

type LogoBarProps = {
  image: string
}

export const LogoBar : React.FC<LogoBarProps> = ({image}) => {
  return <header>
    <NavImage src={image} path="/"/>
  </header>
}