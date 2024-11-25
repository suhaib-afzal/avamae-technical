import { ReactNode } from "react"
import "./FormComponents.css"


export type ContactPageBackgroundProps = {
  children?: ReactNode
}

export const ContactPageBackground: React.FC<ContactPageBackgroundProps> = ({children}) => {
  return <div className="ContactPageBackground">
    {children}
  </div>
}