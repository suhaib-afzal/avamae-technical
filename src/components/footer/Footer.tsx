import { useContext } from "react"
import { FooterBar } from "../../core-components/footer-bar/FooterBar"
import { IsMobileContext } from "../../app/App"


export const Footer : React.FC = () => {
  const desktopOrMobile = useContext(IsMobileContext) ? "mobile" : "desktop"
  return <FooterBar 
            styleType={desktopOrMobile}
            signature={<>
              Website Development by <a href="https://www.avamae.co.uk/"> AVAMAE</a>
            </>} 
          />
}