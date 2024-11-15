import { Link } from "react-router-dom"

interface NavImageProps {
  src: string
  path: string
}

export const NavImage : React.FC<NavImageProps> = ({src, path}) => {
  return <>
    <Link to={path}><img src={src}/></Link>
  </>
}