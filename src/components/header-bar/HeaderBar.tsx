import { useContext } from "react"
import { IsMobileContext } from "../../app/App"
import { NavBar } from "../../core-components/nav-bar/NavBar"
import { LogoBar } from "../../core-components/logo-bar/LogoBar"
import logo from "../../assets/logo.svg"
import { NavButton } from "../nav-button/NavButton"


export const HeaderBar: React.FC = () => {
  const isMobile = useContext(IsMobileContext)

  const navBar = <NavBar image={logo} buttons={[
    <NavButton label="Home" path="/" styleType="link-style"/>,
    <NavButton label="About Us" path="/about-us" styleType="link-style"/>,
    <NavButton label="Contact Us" path="/contact-us" styleType="link-style"/>,
    <NavButton label="Log In" path="" styleType="light-blue"/>]}/>
    
  const logoBar = <LogoBar path="/" image={logo}/>

  return <>{isMobile ? logoBar : navBar}</>
}