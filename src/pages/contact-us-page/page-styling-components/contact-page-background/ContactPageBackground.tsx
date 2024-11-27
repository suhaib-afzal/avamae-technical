import { ReactNode } from "react"
import "./ContactPageBackground.scss"


export type ContactPageBackgroundProps = {
  children?: ReactNode
}

export const ContactPageBackground: React.FC<ContactPageBackgroundProps> = ({children}) => {
  return <div className="ContactPageBackground">
    {children}
  </div>
}