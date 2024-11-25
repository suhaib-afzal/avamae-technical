import { ReactNode } from "react"
import "./FormComponents.css"
import { DesktopOrMobileStyleType } from "../DesktopOrMobileStyleType"

export type ContactFormContainer = {
  desktopOrMobile: DesktopOrMobileStyleType
  children?: ReactNode
}

export const ContactFormContainer: React.FC<ContactFormContainer> = ({desktopOrMobile, children}) => {
  return <div className={`ContactFormContainer-${desktopOrMobile}`}>
    {children}
  </div>
}