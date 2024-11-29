import { render } from "@testing-library/react"
import { LoadingPanel } from "../LoadingPanel"
import { screen } from '@testing-library/dom'


test("renders loading", () => {
  render(<LoadingPanel/>)
  const loadingElem = screen.queryByText("Loading...")
  expect(loadingElem).toBeTruthy()
})