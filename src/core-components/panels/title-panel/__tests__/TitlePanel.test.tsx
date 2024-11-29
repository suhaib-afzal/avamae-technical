import { render } from "@testing-library/react"
import { TitlePanel } from "../TitlePanel"
import { DesktopOrMobileStyleType } from "../../../DesktopOrMobileStyleType"
import { screen } from '@testing-library/dom'


test.each<DesktopOrMobileStyleType>(["desktop", "mobile"])
("renders image title and button", (desktopOrMobile) => {
  const imageSrc = "imageSrc"
  const title = "title"
  const btnId = "btnId"
  const button = <button id={btnId}/>
  render(<TitlePanel image={imageSrc} 
                     title={title} 
                     button={button} 
                     styleType={desktopOrMobile}/>)
  const imgs = document.getElementsByTagName("img")
  const titleElem = screen.queryByText(title)
  const buttons = document.getElementsByTagName("button")

  expect(imgs.length).toBe(1)
  expect(buttons.length).toBe(1)
  expect(imgs[0].src).toContain(imageSrc)
  expect(buttons[0].id).toBe(btnId)
  expect(titleElem).toBeTruthy()
})