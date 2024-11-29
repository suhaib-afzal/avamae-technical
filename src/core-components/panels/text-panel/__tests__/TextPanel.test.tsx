import { render } from "@testing-library/react"
import { TextPanel } from "../TextPanel"
import { DesktopOrMobileStyleType } from "../../../DesktopOrMobileStyleType"
import { screen } from '@testing-library/dom'

test.each<DesktopOrMobileStyleType>(["desktop", "mobile"])
("renders title subtitle text ans button", (desktopOrMobile) => {
  const title = "title"
  const subtitle = "subtitle"
  const text = "text"
  const btnId = "btnId"
  const button = <button id={btnId}/>
  render(<TextPanel title={title} 
                    subtitle={subtitle} 
                    text={text} 
                    button={button}
                    styleType={desktopOrMobile}/>)
  const titleElem = screen.queryByText(title)
  const subtitleElem = screen.queryByText(subtitle)
  const textElem = screen.queryByText(text)
  const buttons = document.getElementsByTagName("button")

  expect(buttons.length).toBe(1)
  expect(buttons[0].id).toBe(btnId)
  expect(titleElem).toBeTruthy()
  expect(subtitleElem).toBeTruthy()
  expect(textElem).toBeTruthy()
})