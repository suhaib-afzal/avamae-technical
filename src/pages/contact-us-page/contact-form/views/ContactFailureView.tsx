import iconFail from "../../../../assets/error-svgrepo-com.svg"
import { FormSuccessFailure } from "../../../../core-components/form-components/form-success-failure/FormSuccessFailure"


//Need a specification for this component, this is a placeholder until
//it is decided what view we should show in this case, how much detail
//about the error should be shown, what this should look like etc
//For now this is made to be like the Success view
export const ContactFailureView: React.FC = () => {
  return <FormSuccessFailure icon={iconFail}
                             message="An unexpected Error has occured"
                             submessage="Please try again or give us a call" 
                             successOrFailure="Failure"/>
}