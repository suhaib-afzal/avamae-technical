import "./TextDocImage.scss"

export type TextDocImageProps = {
  image: string,
  textDocImageStyle: TextDocImageStyle
}

export type TextDocImageStyle = "Wide" | "Standard";

export const TextDocImage: React.FC<TextDocImageProps> = ({image, textDocImageStyle}) => {
  return <div className={`TextDocImageContainer-${textDocImageStyle}`}>
    <img src={image} className={"TextDocImage"}/>
  </div>
}