import { render } from "@testing-library/react"
import { TextDocImage, TextDocImageStyle } from "../TextDocImage"


test.each<TextDocImageStyle>(["Wide","Standard"])("renders image", (style) => {
  const imageSrc = "imageSrc"
  render(<TextDocImage image={imageSrc} textDocImageStyle={style}/>)
  const imgs = document.getElementsByTagName("img")
  expect(imgs.length).toBe(1)
  expect(imgs[0].src).toContain(imageSrc)
})