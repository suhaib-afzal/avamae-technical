import { FooterBar } from "../FooterBar";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom'

test.each<any>([<div id="Child"/>, <img id="Child"/>, <p id="Child"/>])("renders children elements", (child) => {
  render(<FooterBar signature={child} styleType="desktop"/>)
  const element = document.getElementById("Child");
  expect(element).not.toBeNull();
})

test("renders text passed as child", async () => {
  const childText = "childText"
  render(<FooterBar signature={childText} styleType="desktop"/>)
  const text = screen.queryByText(childText);
  expect(text).not.toBeNull();
})