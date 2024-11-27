import { FormSuccessFailure, SuccessOrFailure } from "../../../../core-components/form-components/form-success-failure/FormSuccessFailure"
import { IconCircleBackground } from "../../../../core-components/icon-circle-background/IconCircleBackground"
import iconValid from "../../../../assets/Icon_Valid.svg"



export const ContactSuccessView: React.FC = () => {

    return <FormSuccessFailure 
              icon={<IconCircleBackground iconSrc={iconValid} greenOrRed="Green"/>}
              message="Your message has been sent"
              submessage="We will be in contact with you within 24 hours" 
              successOrFailure="Success"
              desktopOrMobile="desktop"/>

}