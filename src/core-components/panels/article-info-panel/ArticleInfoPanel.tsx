import { ReactNode } from "react"
import "./ArticleInfoPanel.scss"
import { DesktopOrMobileStyleType } from "../../DesktopOrMobileStyleType"

interface ArticleInfoPanelProps {
  image: string,
  title: string,
  text: string,
  button: ReactNode,
  styleType: DesktopOrMobileStyleType
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