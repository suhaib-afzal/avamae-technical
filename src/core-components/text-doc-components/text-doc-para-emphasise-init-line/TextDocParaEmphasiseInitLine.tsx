import { ReactNode } from "react"
import "./TextDocParaEmphasiseInitLine.scss"

export type TextDocParaEmphasiseInitLineProps = {
  emphasisLine: string
  children?: ReactNode
}

export const TextDocParaEmphasiseInitLine: React.FC<TextDocParaEmphasiseInitLineProps> = ({emphasisLine, children}) => {
  return <div className="TextDocParaEmphasiseInitLine">
    <div className="EmphasisLine">{emphasisLine}</div>
    {children}
  </div>
}