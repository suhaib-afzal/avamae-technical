import { render } from "@testing-library/react"
import { GraphicInfoPanel } from "../GraphicInfoPanel"
import { DesktopOrMobileStyleType } from "../../../DesktopOrMobileStyleType"
import { screen } from '@testing-library/dom'


test.each<DesktopOrMobileStyleType>(["desktop", "mobile"])
("renders image title text and button", (desktopOrMobile) => {
  const imageSrc = "imageSrc"
  const title = "title"
  const text = "text"
  const btnId = "btnId"
  const button = <button id={btnId}/> 
  render(<GraphicInfoPanel image={imageSrc} 
                           title={title} 
                           text={text} 
                           button={button} 
                           styleType={desktopOrMobile}/>)
  const imgs = document.getElementsByTagName("img")
  const titleElem = screen.queryByText(title)
  const textElem = screen.queryByText(text)
  const btns = document.getElementsByTagName("button")

  expect(imgs.length).toBe(1)
  expect(imgs[0].src).toContain(imageSrc)
  expect(titleElem).toBeTruthy()
  expect(textElem).toBeTruthy()
  expect(btns.length).toBe(1)
  expect(btns[0].id).toBe(btnId)
})