import { FormRow } from "../FormRow";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom'

test.each<any>([<div id="Child"/>, <img id="Child"/>, <p id="Child"/>])("renders children elements", (child) => {
  render(<FormRow>{child}</FormRow>)
  const element = document.getElementById("Child");
  expect(element).not.toBeNull();
})

test("renders text passed as child", async () => {
  const childtext = "childText"
  render(<FormRow>{childtext}</FormRow>)
  const text = screen.queryByText(childtext);
  expect(text).not.toBeNull();
})