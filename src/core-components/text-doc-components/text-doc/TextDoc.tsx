import { ReactNode } from "react";
import "./TextDoc.scss"


export const TextDoc: React.FC<{children?: ReactNode}> = ({children}) => {
  return <div className="TextDoc">
   {children}
  </div>
}