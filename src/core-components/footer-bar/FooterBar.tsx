import { ReactNode } from "react"
import { DesktopOrMobileStyleType } from "../DesktopOrMobileStyleType"
import "./FooterBar.scss"

type FooterBarProps = {
  signature: ReactNode,
  styleType: DesktopOrMobileStyleType
}

export const FooterBar: React.FC<FooterBarProps> = ({styleType, signature}) => {
  return (
    <div className={`FooterBar-${styleType}`}>
      <div className="SignatureBox">
        {signature}
      </div>
    </div>)
}