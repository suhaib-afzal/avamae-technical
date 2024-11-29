import { ReactNode } from "react"
import "./FormSuccessFailure.scss"

export type FormSucessFailureProps = {
  icon: string | ReactNode,
  message: string,
  submessage: string,
  successOrFailure: SuccessOrFailure
}

export type SuccessOrFailure = "Success" | "Failure"

export const FormSuccessFailure: React.FC<FormSucessFailureProps> = ({icon, message, submessage,
                                                                      successOrFailure}) => {
  const iconComponent = typeof icon === "string"? <img className="IconImage" src={icon}/> : icon
  return <div className={`FormSuccessFailure-${successOrFailure}`}>
    <div className="IconContainer">
      {iconComponent}
    </div>
    <h2>{message}</h2>
    <h3>{submessage}</h3>
  </div>
} 