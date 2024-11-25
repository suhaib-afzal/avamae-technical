export type FormHeaderProps = {
  title: string
  subtext: string
}

export const FormHeader: React.FC<FormHeaderProps> = ({title, subtext}) => {
  return <div className="FormHeader">
    <h1>{title}</h1>
    <div className="Subtext">{subtext}</div>
  </div>
}