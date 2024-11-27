import "./TextDocTitle.scss"

export const TextDocTitle: React.FC<{title: string}> = ({title}) => {
  return <h1 className="TextDocTitle">
    {title}
  </h1>
}