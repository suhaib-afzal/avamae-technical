import { Link } from "react-router-dom"
import { Button, ButtonStyle } from "../../core-components/button/Button"

interface NavButtonProps {
  label: string,
  path: string,
  styleType: ButtonStyle
}

export const NavButton : React.FC<NavButtonProps> = ({label, path, styleType}) => {
  return <Button styleType={styleType}>
      <Link to={path}>{label}</Link>
    </Button>
}