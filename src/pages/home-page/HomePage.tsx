import { TextPanel } from "../../core-components/panels/text-panel/TextPanel"
import { ArticleInfoPanel } from "../../core-components/panels/article-info-panel/ArticleInfoPanel"
import { Carousel } from "./carousel/Carousel"
import { loremIpsum } from "lorem-ipsum"
import { useContext } from "react"
import { IsMobileContext } from "../../app/App"
import officeImage2 from "../../assets/shutterstock_696636415.jpg"
import coolWomanImage from "../../assets/shutterstock_1302552622.jpg"
import { GraphicInfoPanel } from "../../core-components/panels/graphic-info-panel/GraphicInfoPanel"
import { NavButton } from "../../components/nav-button/NavButton"

export const HomePage : React.FC = () => {
  const isMobile = useContext(IsMobileContext);
  const desktopOrMobile = isMobile ? "mobile" : "desktop"
  const whenMobileWideSuffix = isMobile? "-wide": "";
  return ( <>
      <Carousel/>
      <ArticleInfoPanel image={officeImage2} title={loremIpsum()} 
                      text={loremIpsum({count: 2, units: "paragraphs"})} 
                      styleType={desktopOrMobile}
                      button={
        <NavButton label="Learn More" path="/about-us" styleType={`dark-blue${whenMobileWideSuffix}`}/>
      } />
      <GraphicInfoPanel image={coolWomanImage} title={loremIpsum({count: 2, units: "words"})}
                      text={loremIpsum({count: 3, units: "sentences"})} 
                      styleType={desktopOrMobile} 
                      button={
        <NavButton label="Log In" path="" styleType={`light-blue${whenMobileWideSuffix}`}/>
      }/>
      <TextPanel title={loremIpsum({count: 3, units: "words"})} 
                 subtitle={loremIpsum({count: 1, units: "sentences"})} 
                 text={loremIpsum({count: 4, units: "paragraphs"})} 
                 styleType={desktopOrMobile}
                 button={
        <NavButton label="Contact us" path="/contact-us" styleType={`dark-blue${whenMobileWideSuffix}`}/>
      }/>
    </>
  )
}