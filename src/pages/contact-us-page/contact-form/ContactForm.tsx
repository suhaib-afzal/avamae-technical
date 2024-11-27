import { useContext, useState } from "react";
import { ContactFormContainer } from "../page-styling-components/contact-form-container/ContactFormContainer";
import { loremIpsum } from "lorem-ipsum";
import { FormHeader } from "../../../core-components/form-components/form-header/FormHeader";
import { IsMobileContext } from "../../../app/App";
import { ContactSuccessView } from "./views/ContactSuccessView";
import { ContactFailureView } from "./views/ContactFailureView";
import { ContactFormView } from "./views/ContactFormView";

type FormState = "Form" | "Success" | "Failure"

export const ContactForm: React.FC = () => {
  const isMobile = useContext(IsMobileContext);
  const [formState, setFormState] = useState<FormState>("Form")

  return (    
    <ContactFormContainer desktopOrMobile={isMobile? "mobile": "desktop"}>
      <FormHeader title="Contact Us" 
                  subtext={loremIpsum({count:3, units:"sentences"})}/>
      { formState === "Form" &&
        <ContactFormView isMobile={isMobile}
                     switchToFormSuccess={() => setFormState("Success")}
                     switchToFormFailure={() => setFormState("Failure")}/>
      }
      { formState === "Success" &&
        <ContactSuccessView/>
      }
      {/*Not in specification but should definitely be considered*/}
      { formState === "Failure" &&
        <ContactFailureView/>
      }
    
    </ContactFormContainer>
  )
}


