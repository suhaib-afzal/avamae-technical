import { render } from "@testing-library/react"
import { LogoBar } from "../LogoBar"
import userEvent from "@testing-library/user-event"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ReactNode } from "react"
import { screen } from '@testing-library/dom'

test("renders a clickable image", async () => {
  const redirectPath = "/path"
  const redirectPageContent = "redirectPageContent"
  const redirectComponent = <div>{redirectPageContent}</div>
  const imgSrc = "imgSrc"

  render(<RouterWrapper redirectComponent={redirectComponent} 
                        redirectPath={redirectPath}>
    <LogoBar path={redirectPath} image={imgSrc} />
  </RouterWrapper>)

  const imgs = document.getElementsByTagName("img")

  expect(imgs.length).toBe(1)
  const renderedImg = imgs[0];
  expect(renderedImg.src).toContain(imgSrc)

  await userEvent.click(renderedImg)
  const redirectPageElem =screen.queryByText(redirectPageContent)
  expect(redirectPageElem).toBeTruthy()
})

const RouterWrapper: React.FC<{redirectPath: string, redirectComponent: ReactNode, children?: ReactNode}> = 
({redirectPath, redirectComponent, children}) => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: children,
    },
    {
      path: redirectPath,
      element: redirectComponent
    },
  ]);

  return <RouterProvider router={router}/>
}