import { ReactNode } from "react"
import "./AboutDocumentContainer.scss"
import { DesktopOrMobileStyleType } from "../../../../core-components/DesktopOrMobileStyleType";

export type AboutDocumentContainerProps = {
  children?: ReactNode;
  desktopOrMobile: DesktopOrMobileStyleType
}

export const AboutDocumentContainer: React.FC<AboutDocumentContainerProps> = ({children, desktopOrMobile}) => {
  return <div className={`AboutDocumentContainer-${desktopOrMobile}`}>
    {children}
  </div>
}