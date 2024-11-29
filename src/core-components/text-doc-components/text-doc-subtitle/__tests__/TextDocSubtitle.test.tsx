import { render } from "@testing-library/react"
import { TextDocSubtitle } from "../TextDocSubtitle"
import { screen } from '@testing-library/dom'

test("renders subtitle", () => {
  const subtitle = "Subitle"
  render(<TextDocSubtitle subtitle={subtitle}/>)
  const subtitleElem = screen.getByText(subtitle)
  expect(subtitleElem).toBeTruthy()
})