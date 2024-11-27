import "./IconCircleBackground.scss"


export type IconCircleBackgroundProps = {
  iconSrc: string
  greenOrRed: GreenOrRed
}

export type GreenOrRed = "Green" | "Red";

export const IconCircleBackground : React.FC<IconCircleBackgroundProps> = ({iconSrc, greenOrRed}) => {
  return <div className={`IconCircle-${greenOrRed}`}> 
    <img src={iconSrc}/>
  </div>
}