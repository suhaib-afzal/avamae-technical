import { ReactNode } from "react"
import "./FormRow.scss"

export type FormRowProps = {
  children?: ReactNode
  formRowAlign?: FormRowAlign
}

export type FormRowAlign = "left" | "standard";

export const FormRow: React.FC<FormRowProps> = ({children, formRowAlign}) => {
  formRowAlign ??= "standard"
  return <div className={`FormRow-${formRowAlign}`}>
    {children}
  </div>
}