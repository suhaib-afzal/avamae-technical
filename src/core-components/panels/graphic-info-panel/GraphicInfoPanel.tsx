import { ReactNode } from "react"
import "./GraphicInfoPanel.css"
import { PanelStyleType } from "../PanelStyleType"

interface GraphicInfoPanelProps {
  image: string,
  title: string,
  text: string,
  button: ReactNode,
  styleType: PanelStyleType
}

export const GraphicInfoPanel: React.FC<GraphicInfoPanelProps> = ({image, title, text, button, styleType}) => {
  return <div className={`GraphicInfoPanel-${styleType}`}>
    <div className="InfoBox">
      <h3>{title}</h3>
      <div className="text">{text}</div>
      <div>{button}</div>
    </div>
    <img src={image}/>
  </div>
}