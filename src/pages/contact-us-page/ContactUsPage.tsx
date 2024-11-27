import { useContext } from "react"
import { ContactPageBackground } from "./page-styling-components/contact-page-background/ContactPageBackground"
import { ContactForm } from "./contact-form/ContactForm"
import { IsMobileContext } from "../../app/App"

export const ContactUsPage : React.FC = () => {
  const isMobile = useContext(IsMobileContext);
  return ( isMobile?
    <ContactForm/>:
    <ContactPageBackground>
      <ContactForm/>
    </ContactPageBackground>
  )
}