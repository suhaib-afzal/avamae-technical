import { Form, Formik } from "formik"
import { useContext, useState } from "react";
import { Button } from "../../core-components/button/Button";
import { FormField } from "../../core-components/form-components/FormField";
import { FormRow } from "../../core-components/form-components/FormRow";
import { ContactFormContainer } from "../../core-components/form-components/ContactFormContainer";
import { loremIpsum } from "lorem-ipsum";
import { FormHeader } from "../../core-components/form-components/FormHeader";
import { IsMobileContext } from "../../app/App";
import { convertNames, toContactInfo } from "./ContactInfo";
import { postContactInfo, ExpectedResponse, isExpectedResponse } from "./postContactInfo";
import { ContactForm } from "./ContactForm";
import { ContactSuccess } from "./ContactSuccess";
import { ContactFailure } from "./ContactFailure";

type FormState = "Form" | "Success" | "Failure"

export const ContactFormController: React.FC = () => {
  const isMobile = useContext(IsMobileContext);
  const [formState, setFormState] = useState<FormState>("Form")

  return (    
    <ContactFormContainer desktopOrMobile={isMobile? "mobile": "desktop"}>
      <FormHeader title="Contact Us" 
                  subtext={loremIpsum({count:3, units:"sentences"})}/>
      { formState === "Form" &&
        <ContactForm isMobile={isMobile}
                     switchToFormSuccess={() => setFormState("Success")}
                     switchToFormFailure={() => setFormState("Failure")}/>
      }
      { formState === "Success" &&
        <ContactSuccess/>
      }
      {/*Not in specification but should definitely be considered*/}
      { formState === "Failure" &&
        <ContactFailure/>
      }
    
    </ContactFormContainer>
  )
}


