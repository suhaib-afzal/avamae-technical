import { render } from "@testing-library/react";
import { TextDocParagraph } from "../TextDocParagraph";
import { screen } from '@testing-library/dom'

test.each<any>([<div id="Child"/>, <img id="Child"/>, <p id="Child"/>])("renders children elements", (child) => {
  render(<TextDocParagraph>{child}</TextDocParagraph>)
  const element = document.getElementById("Child");
  expect(element).not.toBeNull();
})

test("renders text passed as child", async () => {
  const childText = "text text text"
  render(<TextDocParagraph>{childText}</TextDocParagraph>)
  const text = screen.queryByText(childText);
  expect(text).not.toBeNull();
})

