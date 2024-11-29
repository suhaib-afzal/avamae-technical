import { render } from "@testing-library/react"
import { TextDocTitle } from "../TextDocTitle"
import { screen } from '@testing-library/dom'

test("renders title" , () => {
  const title = "Title"
  render(<TextDocTitle title={title}/>)
  const titleElem = screen.getByText(title)
  expect(titleElem).toBeTruthy()
})