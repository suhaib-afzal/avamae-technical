import { render } from "@testing-library/react";
import { TextDocParaEmphasiseInitLine } from "../TextDocParaEmphasiseInitLine";
import { screen } from '@testing-library/dom'

test.each<any>([<div id="Child"/>, <img id="Child"/>, <p id="Child"/>])
("renders children elements and emphasis line", (child) => {
  const emphasisText = "emphasisText"
  render(<TextDocParaEmphasiseInitLine emphasisLine={emphasisText}>{child}</TextDocParaEmphasiseInitLine>)
  const element = document.getElementById("Child")
  const emphasisElem = screen.queryByText(emphasisText)
  expect(element).not.toBeNull()
  expect(emphasisElem).not.toBeNull()
})

test("renders text passed as child and emphasis line", async () => {
  const childText = "text text text"
  const emphasisText = "emphasisText"
  render(<TextDocParaEmphasiseInitLine emphasisLine={emphasisText}>{childText}</TextDocParaEmphasiseInitLine>)
  const text = screen.queryByText(childText)
  const emphasisElem = screen.queryByText(emphasisText)
  expect(text).not.toBeNull()
  expect(emphasisElem).not.toBeNull()
})
