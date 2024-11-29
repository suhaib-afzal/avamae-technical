import { render } from "@testing-library/react"
import { FormHeader } from "../FormHeader"
import { screen } from '@testing-library/dom'


test("renders title and subtext", () => {
  const titleVal = "Title"
  const subtextVal = "Subtext"
  render(<FormHeader title={titleVal} subtext={subtextVal}/>)
  const titleText = screen.queryByText(titleVal)
  const subtextText = screen.queryByText(subtextVal)
  
  expect(titleText).not.toBeNull()
  expect(subtextText).not.toBeNull()
})