import "./TextDocSubtitle.scss"

export const TextDocSubtitle: React.FC<{subtitle: string}> = ({subtitle}) => {
  return <h1 className="TextDocSubtitle">
    {subtitle}
  </h1>
}