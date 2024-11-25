import { FormSuccessFailure, SuccessOrFailure } from "../../core-components/form-components/FormSucessFailure"
import iconValid from "../../assets/Icon_Valid.svg"
import { IconCircleBackground } from "../../core-components/form-components/IconCircleBackground"



export const ContactSuccess: React.FC = () => {

    return <FormSuccessFailure 
              icon={<IconCircleBackground iconSrc={iconValid} greenOrRed="Green"/>}
              message="Your message has been sent"
              submessage="We will be in contact with you within 24 hours" 
              successOrFailure="Success"
              desktopOrMobile="desktop"/>

}