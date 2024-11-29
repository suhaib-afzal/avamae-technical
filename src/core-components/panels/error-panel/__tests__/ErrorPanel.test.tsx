import { render } from "@testing-library/react"
import { ErrorPanel } from "../ErrorPanel"
import { screen } from '@testing-library/dom'


test("renders error message and error title", () => {
  const errorMsg = "errorMsg"
  const errorTitle = "Unexpected Error"
  render(<ErrorPanel errorMsg={errorMsg}/>)
  const errMsgElem = screen.queryByText(errorMsg)
  const errTitleElem = screen.queryByText(errorTitle)
  expect(errMsgElem).toBeTruthy()
  expect(errTitleElem).toBeTruthy()
})