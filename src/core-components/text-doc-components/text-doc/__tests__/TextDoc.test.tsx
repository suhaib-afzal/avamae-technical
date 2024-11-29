import { render } from "@testing-library/react";
import { TextDoc } from "../TextDoc";
import { screen } from '@testing-library/dom'

test.each<any>([<div id="Child"/>, <img id="Child"/>, <p id="Child"/>])("renders children elements", (child) => {
  render(<TextDoc>{child}</TextDoc>)
  const element = document.getElementById("Child");
  expect(element).not.toBeNull();
})

test("renders text passed as child", async () => {
  const childText = "childText"
  render(<TextDoc>{childText}</TextDoc>)
  const text = screen.queryByText(childText);
  expect(text).not.toBeNull();
})