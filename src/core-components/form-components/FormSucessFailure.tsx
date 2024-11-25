import { ReactNode } from "react"
import { DesktopOrMobileStyleType } from "../DesktopOrMobileStyleType"
import "./FormComponents.css"

export type FormSucessFailureProps = {
  icon: string | ReactNode,
  message: string,
  submessage: string,
  successOrFailure: SuccessOrFailure,
  desktopOrMobile: DesktopOrMobileStyleType
}

export type SuccessOrFailure = "Success" | "Failure"

export const FormSuccessFailure: React.FC<FormSucessFailureProps> = ({icon, message, submessage,
                                                                      successOrFailure, desktopOrMobile}) => {
  const iconComponent = typeof icon === "string"? <img className="IconImage" src={icon}/> : icon
  return <div className={`FormSuccessFailure-${successOrFailure}`}>
    <div className="IconContainer">
      {iconComponent}
    </div>
    <h2>{message}</h2>
    <h3>{submessage}</h3>
  </div>
} 