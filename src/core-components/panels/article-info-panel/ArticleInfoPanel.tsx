import { ReactNode } from "react"
import "./ArticleInfoPanel.css"
import { PanelStyleType } from "../PanelStyleType"

interface ArticleInfoPanelProps {
  image: string,
  title: string,
  text: string,
  button: ReactNode,
  styleType: PanelStyleType
}

export const ArticleInfoPanel: React.FC<ArticleInfoPanelProps> = ({image, title, text, button, styleType}) => {
  return <div className={`ArticleInfoPanel-${styleType}`}>
    <div className="InfoBoxContainer">
      <div className="InfoBox">
        <h3>{title}</h3>
        <div className="text">{text}</div>
        <div>{button}</div>
      </div>
    </div>
    <div className="ImageBox">
      <img src={image}/>
    </div>
  </div>
}