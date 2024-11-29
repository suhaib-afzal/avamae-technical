import { render } from "@testing-library/react"
import { FormSuccessFailure, SuccessOrFailure } from "../FormSuccessFailure"
import { screen } from '@testing-library/dom'


test.each<SuccessOrFailure>(["Success", "Failure"])
  ("icon (as source), message and submessage rendered", (successOrFailure) => {

    const messageVal = "Message"
    const submessageVal = "Submessage"
    const iconSrc = "iconSrc"
    render(<FormSuccessFailure successOrFailure={successOrFailure}
                             message={messageVal} 
                             submessage={submessageVal} 
                             icon={iconSrc}/>)
    const imgElems = document.getElementsByTagName("img")

    expect(imgElems.length).toBe(1)
    expect(imgElems[0].src).toContain(iconSrc)
    expect(screen.queryAllByText(messageVal)).toBeTruthy();
    expect(screen.queryAllByText(submessageVal)).toBeTruthy();
})

test.each<SuccessOrFailure>(["Success", "Failure"])
  ("icon (as component), message and submessage rendered", (successOrFailure) => {

    const messageVal = "Message"
    const submessageVal = "Submessage"
    const iconId = "ImgId"
    const icon = <div><img id={iconId}/></div>
    render(<FormSuccessFailure successOrFailure={successOrFailure}
                             message={messageVal} 
                             submessage={submessageVal} 
                             icon={icon}/>)
    const imgElems = document.getElementsByTagName("img")

    expect(imgElems.length).toBe(1)
    expect(imgElems[0].id).toBe(iconId)
    expect(screen.queryAllByText(messageVal)).toBeTruthy();
    expect(screen.queryAllByText(submessageVal)).toBeTruthy();
})
