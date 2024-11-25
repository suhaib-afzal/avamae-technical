import { useContext } from "react"
import { ContactPageBackground } from "../../core-components/form-components/ContactPageBackground"
import { ContactFormController } from "./ContactFormController"
import { IsMobileContext } from "../../app/App"

export const ContactUsPage : React.FC = () => {
  const isMobile = useContext(IsMobileContext);
  return ( isMobile?
    <ContactFormController/>:
    <ContactPageBackground>
      <ContactFormController/>
    </ContactPageBackground>
  )
}