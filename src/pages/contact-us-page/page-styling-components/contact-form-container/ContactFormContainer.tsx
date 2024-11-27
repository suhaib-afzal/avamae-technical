import { ReactNode } from "react"
import "./ContactFormContainer.scss"
import { DesktopOrMobileStyleType } from "../../../../core-components/DesktopOrMobileStyleType"

export type ContactFormContainer = {
  desktopOrMobile: DesktopOrMobileStyleType
  children?: ReactNode
}

export const ContactFormContainer: React.FC<ContactFormContainer> = ({desktopOrMobile, children}) => {
  return <div className={`ContactFormContainer-${desktopOrMobile}`}>
    {children}
  </div>
}