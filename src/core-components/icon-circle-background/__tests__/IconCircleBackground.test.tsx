import { render } from "@testing-library/react"
import { GreenOrRed, IconCircleBackground } from "../IconCircleBackground"


test.each<GreenOrRed>(["Green", "Red"])("renders image", (greenOrRed) => {
  const iconSrc = "iconSrc"
  render(<IconCircleBackground iconSrc={iconSrc} greenOrRed={greenOrRed}/>)
  const imgs = document.getElementsByTagName("img")

  expect(imgs.length).toBe(1)
  expect(imgs[0].src).toContain(iconSrc)
})