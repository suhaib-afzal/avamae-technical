import { render } from "@testing-library/react"
import { ArticleInfoPanel } from "../ArticleInfoPanel"
import { screen } from '@testing-library/dom'
import { DesktopOrMobileStyleType } from "../../../DesktopOrMobileStyleType"


test.each<DesktopOrMobileStyleType>(["desktop", "mobile"])("renders image title text and button", (style) => {
  const imageSrc = "imageSrc"
  const title = "title"
  const text = "text"
  const btnId = "btnId"
  const button = <button id={btnId}/>
  render(<ArticleInfoPanel image={imageSrc} 
                           title={title} 
                           text={text} 
                           button={button} 
                           styleType={style}/>)
  const imgs = document.getElementsByTagName("img")
  const titleElem = screen.queryByText(title)
  const textElem = screen.queryByText(text)
  const btns = document.getElementsByTagName("button")

  expect(imgs.length).toBe(1)
  expect(titleElem).toBeTruthy()
  expect(textElem).toBeTruthy()
  expect(btns.length).toBe(1)
  expect(btns[0].id).toBe(btnId)
})