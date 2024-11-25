import { ReactNode } from 'react'
import './TitlePanel.css' 
import { DesktopOrMobileStyleType } from '../../DesktopOrMobileStyleType'


interface TitlePanelProps {
  image: string,
  title: string,
  subtitle?: string,
  button: ReactNode,
  styleType: DesktopOrMobileStyleType
}

export const TitlePanel: React.FC<TitlePanelProps> = ({image, title, subtitle, button, styleType}) => {
  return <div className={`TitlePanel-large-${styleType}`}>
    <div className='Infobox'>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div>{button}</div>
    </div>
    <img src={image}/>
  </div>
}