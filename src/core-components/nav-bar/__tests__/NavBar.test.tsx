import { render } from "@testing-library/react"
import { NavBar } from "../NavBar"


test("Will render image and passed in buttons", () => {
  const imageSrc = "imageSrc"
  const buttons = [<button id="btn1"/>, <button id="btn2"/>, <button id="btn3"/>]
  render(<NavBar image={imageSrc} buttons={buttons}/>)
  const imgs = document.getElementsByTagName("img")
  const btn1 = document.getElementById("btn1")
  const btn2 = document.getElementById("btn2")
  const btn3 = document.getElementById("btn3")

  expect(imgs.length).toBe(1)
  expect(imgs[0].src).toContain(imageSrc)
  expect(btn1).toBeTruthy()
  expect(btn2).toBeTruthy()
  expect(btn3).toBeTruthy()
})