import { ReactNode } from "react"
import "./GraphicInfoPanel.scss"
import { DesktopOrMobileStyleType } from "../../DesktopOrMobileStyleType"

interface GraphicInfoPanelProps {
  image: string,
  title: string,
  text: string,
  button: ReactNode,
  styleType: DesktopOrMobileStyleType
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