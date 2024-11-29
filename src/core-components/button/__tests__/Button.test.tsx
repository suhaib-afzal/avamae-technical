import { render } from "@testing-library/react";
import { Button, ButtonStyle } from "../Button";
import userEvent from "@testing-library/user-event";
import { screen } from '@testing-library/dom'

test.each<ButtonStyle>(["light-blue", "dark-blue", "link-style", "light-blue-wide", "dark-blue-wide"])
  ("button should run onClick when clicked regardless of style", async (styleType) => {
     const onClickMock = jest.fn();
     render(<Button styleType={styleType} onClick={onClickMock}/>)

     const buttons = document.getElementsByTagName("button")
     expect(buttons.length).toBe(1)
     const button = buttons[0]

     await userEvent.click(button)
     expect(onClickMock).toHaveBeenCalledTimes(1);
  })


test.each<any>([<div id="Child"/>, <img id="Child"/>, <p id="Child"/>])("renders children elements", (child) => {
  render(<Button styleType="light-blue">{child}</Button>)
  const element = document.getElementById("Child");
  expect(element).not.toBeNull();
})

test("renders text passed as child", async () => {
  const buttonText = "Click Me!"
  render(<Button styleType="light-blue">{buttonText}</Button>)
  const text = screen.queryByText(buttonText);
  expect(text).not.toBeNull();
})

