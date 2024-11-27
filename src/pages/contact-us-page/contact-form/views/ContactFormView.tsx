import { Form, Formik } from "formik"
import { FormRow } from "../../../../core-components/form-components/form-row/FormRow"
import { FormField } from "../../../../core-components/form-components/form-field/FormField"
import { Button } from "../../../../core-components/button/Button"
import { useState } from "react"
import { isExpectedResponse, postContactInfo, postContactInfoFails, postContactInfoSucceeds } from "../api/postContactInfo"
import { convertNames, toContactInfo } from "../data/ContactInfo"

type ContactFormProps = {
  isMobile: boolean,
  switchToFormSuccess: () => void
  switchToFormFailure: () => void
}


export const ContactFormView: React.FC<ContactFormProps> = ({isMobile, switchToFormSuccess, switchToFormFailure}) => {
  const [showSecondPhoneNumer, setShowSecondPhoneNumer] = useState(false);
  const [includeAddressDetails, setIncludeAddressDetails] = useState(false);

  return <Formik initialValues={{
    FullName: "", 
    EmailAddress: "", 
    PhoneNumber0: "", 
    PhoneNumber1: "",
    Message: "",
    AddressLine1: "",
    AddressLine2: "",
    CityTown: "",
    StateCounty: "",
    Postcode: "",
    Country: ""}}

    onSubmit={async (values, actions) => {
      const details = toContactInfo(values, includeAddressDetails);
      const response = await postContactInfo(details);
      if (isExpectedResponse(response))
      {
        if (response.Errors.length === 0)
        {
          switchToFormSuccess()
        }
        else
        {
          //Use the error messages from the API to display to the user
          //at the moment these are not very user-friendly
          //We would like to make these better, because even if we implement
          //front-end validation, we still would want to do something with the
          //field based error messages we get back
          response.Errors.forEach(err => {
            const formName = convertNames(err.FieldName)
            actions.setFieldError(formName, err.MessageCode)
          });
        }
      }
      else 
      {
        switchToFormFailure()
      }
    }}> 
  
    <Form>
      { isMobile?
        <>
          <FormRow>
            <FormField name="FullName" label="Full Name"/>
          </FormRow>
          <FormRow>
            <FormField name="EmailAddress" label="Email"/>
          </FormRow>
        </>
        :
        <FormRow>
          <FormField name="FullName" label="Full Name"/>
          <FormField name="EmailAddress" label="Email"/>
        </FormRow>
      }
  
      <FormRow>  
        <FormField name="PhoneNumber0" label="Phone Number 01" isOptional={true}/>
      </FormRow>

      {showSecondPhoneNumer && <>
        <FormRow><FormField name="PhoneNumber1" label="Phone Number 02" isOptional={true}/></FormRow>
      </> }
  
      <FormRow>
        <Button type="button" onClick={() => setShowSecondPhoneNumer(!showSecondPhoneNumer)} 
                styleType={"light-blue-wide"}>
          {showSecondPhoneNumer? "Remove phone number" : "Add new phone numer"}
        </Button>
      </FormRow>
  
      <FormRow>
        <FormField name="Message" label="Message" isMultilineInput={true}/>
      </FormRow>
  
      <FormRow formRowAlign="left">
        <input type="radio" name="bIncludeAddressDetails" checked={includeAddressDetails} 
            onClick={() => setIncludeAddressDetails(!includeAddressDetails)}/>
        <label>Add Address Details</label>
      </FormRow>

      {includeAddressDetails && 
        <AddressDetailsForm isMobile={isMobile}/>
      }
      <FormRow>
        <Button styleType="dark-blue-wide" type="submit">Submit</Button>
      </FormRow>
    </Form>
  </Formik>
}

const AddressDetailsForm: React.FC<{isMobile: boolean}> = ({isMobile}) => {
  if (isMobile)
  {
    return <>
      <FormRow>
        <FormField name="AddressLine1" label="Address Line 1"/>
      </FormRow>

      <FormRow>
        <FormField name="AddressLine2" label="Address Line 2"/>
      </FormRow>

      <FormRow>
        <FormField name="CityTown" label="City/Town"/>
        <FormField name="StateCounty" label="State/County"/>
      </FormRow>

      <FormRow>
        <FormField name="Postcode" label="Postcode"/>
        <FormField name="Country" label="Country"/>        
      </FormRow>
    </>
  }

  return <>
    <FormRow>
      <FormField name="AddressLine1" label="Address Line 1"/>
      <FormField name="AddressLine2" label="Address Line 2"/>
    </FormRow>

    <FormRow>
      <FormField name="CityTown" label="City/Town"/>
      <FormField name="StateCounty" label="State/County"/>
      <FormField name="Postcode" label="Postcode"/>
      <FormField name="Country" label="Country"/>
    </FormRow>
  </>
}
