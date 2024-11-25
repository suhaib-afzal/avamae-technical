import { ErrorMessage, Field } from "formik"
import "./FormComponents.css"

export type FormFieldProps = {
  name: string,
  label: string
  isMultilineInput?: boolean
  isOptional?: boolean
} 


export const FormField: React.FC<FormFieldProps> = ({name, label, isMultilineInput, isOptional}) => {
  isMultilineInput ??= false
  const fieldAs = isMultilineInput? "textarea": "input"

  isOptional ??= false
  const labelElem = isOptional? 
                    <>{label} <i className="indicatesOptional">- optional</i> </>:
                     label
  //rows attribute on Field will only apply when rendered as textarea,
  //however, this is unclean, refactor to make it make more sense
  return ( <div className="FormField">
      <label htmlFor={name}>{labelElem}</label>
      <Field name={name} type="text" className="Field" as={fieldAs} rows={5}/>
      <ErrorMessage name={name} component="div" className="FieldErrorMsg"/>
    </div>
  )
}