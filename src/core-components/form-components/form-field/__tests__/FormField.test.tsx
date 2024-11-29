import { Formik } from "formik";
import { FormField } from "../FormField"
import { render } from "@testing-library/react";
import { ReactNode } from "react";

test("default attributes - renders a label, input and a div", () => {
  const labelVal = "labelVal"
  const fieldName = "fieldName"
  render(<FormikWrapper>
           <FormField name={fieldName} label={labelVal}/>
         </FormikWrapper>)
  const labelElems = document.getElementsByTagName("label")
  const inputElems = document.getElementsByTagName("input")
  const divElems = document.getElementsByTagName("div")

  expect(labelElems.length).toBe(1)
  expect(inputElems.length).toBe(1)
  //Account for default wrapping div
  expect(divElems.length).toBe(3)

  const label = labelElems[0]
  expect(label.textContent).toBeTruthy()
  expect(label.textContent).toContain(labelVal)

  const input = inputElems[0]
  expect(input).toHaveClass("Field")

  const divFormField = divElems[1]
  expect(divFormField).toHaveClass("FormField")
  const divErrMsg = divElems[2]
  expect(divErrMsg).toHaveClass("FieldErrorMsg")
})

test("not optional, not multiline - renders a label, input and a div", () => {
  const labelVal = "labelVal"
  render(<FormikWrapper>
           <FormField name="fieldName" label={labelVal} isOptional={false} isMultilineInput={false}/>
         </FormikWrapper>)
  const labelElems = document.getElementsByTagName("label")
  const inputElems = document.getElementsByTagName("input")
  const divElems = document.getElementsByTagName("div")

  expect(labelElems.length).toBe(1)
  expect(inputElems.length).toBe(1)
  //Account for default wrapping div
  expect(divElems.length).toBe(3)

  const label = labelElems[0]
  expect(label.textContent).not.toBeNull()
  expect(label.textContent).toContain(labelVal);

  const input = inputElems[0]
  expect(input).toHaveClass("Field")

  const divFormField = divElems[1]
  expect(divFormField).toHaveClass("FormField")
  const divErrMsg = divElems[2]
  expect(divErrMsg).toHaveClass("FieldErrorMsg")
})

test("optional, not multiline - renders a label, input and a div", () => {
  const labelVal = "labelVal"
  render(<FormikWrapper>
           <FormField name="fieldName" label={labelVal} isOptional={true} isMultilineInput={false}/>
         </FormikWrapper>)
  const labelElems = document.getElementsByTagName("label")
  const inputElems = document.getElementsByTagName("input")
  const divElems = document.getElementsByTagName("div")

  expect(labelElems.length).toBe(1)
  expect(inputElems.length).toBe(1)
  //Account for default wrapping div
  expect(divElems.length).toBe(3)

  const label = labelElems[0]
  expect(label.textContent).not.toBeNull()
  expect(label.textContent).toContain("optional")
  expect(label.textContent).toContain(labelVal);
  
  const input = inputElems[0]
  expect(input).toHaveClass("Field")

  const divFormField = divElems[1]
  expect(divFormField).toHaveClass("FormField")
  const divErrMsg = divElems[2]
  expect(divErrMsg).toHaveClass("FieldErrorMsg")
})

test("optional, multiline - renders a label, textarea and a div", () => {
  const labelVal = "labelVal"
  render(<FormikWrapper>
           <FormField name="fieldName" label={labelVal} isOptional={true} isMultilineInput={true}/>
         </FormikWrapper>)
  const labelElems = document.getElementsByTagName("label")
  const inputElems = document.getElementsByTagName("input")
  const textareaElems = document.getElementsByTagName("textarea")
  const divElems = document.getElementsByTagName("div")

  expect(labelElems.length).toBe(1)
  expect(inputElems.length).toBe(0)
  expect(textareaElems.length).toBe(1)
  //Account for default wrapping div
  expect(divElems.length).toBe(3)

  const label = labelElems[0]
  expect(label.textContent).not.toBeNull()
  expect(label.textContent).toContain("optional")
  expect(label.textContent).toContain(labelVal);

  const textarea = textareaElems[0]
  expect(textarea).toHaveClass("Field")

  const divFormField = divElems[1]
  expect(divFormField).toHaveClass("FormField")
  const divErrMsg = divElems[2]
  expect(divErrMsg).toHaveClass("FieldErrorMsg")
})

test("not optional, multiline - renders a label, textarea and a div", () => {
  const labelVal = "labelVal"
  render(<FormikWrapper>
           <FormField name="fieldName" label={labelVal} isOptional={false} isMultilineInput={true}/>
         </FormikWrapper>)
  const labelElems = document.getElementsByTagName("label")
  const inputElems = document.getElementsByTagName("input")
  const textareaElems = document.getElementsByTagName("textarea")
  const divElems = document.getElementsByTagName("div")

  expect(labelElems.length).toBe(1)
  expect(inputElems.length).toBe(0)
  expect(textareaElems.length).toBe(1)
  //Account for default wrapping div
  expect(divElems.length).toBe(3)

  const label = labelElems[0]
  expect(label.textContent).not.toBeNull()
  expect(label.textContent).toContain(labelVal);

  const textarea = textareaElems[0]
  expect(textarea).toHaveClass("Field")

  const divFormField = divElems[1]
  expect(divFormField).toHaveClass("FormField")
  const divErrMsg = divElems[2]
  expect(divErrMsg).toHaveClass("FieldErrorMsg")
})


const FormikWrapper: React.FC<{children?: ReactNode}> = ({children}) => {
  return <Formik initialValues={{fieldName: ""}} onSubmit={jest.fn()} 
                 initialErrors={{fieldName: "Error"}} initialTouched={{fieldName: true}}>
    {children}
  </Formik>
}