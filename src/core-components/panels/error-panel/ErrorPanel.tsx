import "./ErrorPanel.scss"

export const ErrorPanel: React.FC<{errorMsg: string}> = ({errorMsg}) => {
  return <div className="ErrorPanel-large">
    <div className="ErrorTitle">
      Unexpected Error
    </div>
    <div className="ErrorMessage">
      {errorMsg}
    </div>
  </div>
}