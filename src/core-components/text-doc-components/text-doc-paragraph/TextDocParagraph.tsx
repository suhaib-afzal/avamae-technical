import { ReactNode } from "react"
import "./TextDocParagraph.scss"

export type TextDocParagraphProps = {
  children?: ReactNode
}

export const TextDocParagraph: React.FC<TextDocParagraphProps> = ({children}) => {
  return <div className="TextDocParagraph">
    {children}
  </div>
}