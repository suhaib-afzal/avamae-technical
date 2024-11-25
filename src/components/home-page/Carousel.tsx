import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useGetBannerDetails } from "../../hooks/useGetBannerDetails"
import { TitlePanel } from "../../core-components/panels/title-panel/TitlePanel"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { IsMobileContext } from "../../app/App";
import { useContext } from "react";
import { NavButton } from "../nav-button/NavButton";


export const Carousel : React.FC = () => {
  const bannerDetails = useGetBannerDetails()
  const isMobile = useContext(IsMobileContext);
  const isLoading = bannerDetails === undefined 

  if (isLoading)
  {
    return <div> Loading </div>
  }

  const isErrorState = bannerDetails.Errors.length > 0

  if (isErrorState)
  {
    return <div> ERROR </div>
  }

  const imageDeets = bannerDetails.Details

  //Image panel styling on desktop will always show the top of the image,
  //for the image of the office, this means we only see the ceiling,
  //this is not the intended effect, but to achieve the intended effect with
  //the other images, we need this to happen. 
  //TODO: Introduce some way to distingusish the required cropping, should be
  //      specified by the API, so the frontend doesnt need to somehow indetify images
  const slides = imageDeets.map(deet => 
    <SwiperSlide>
      <TitlePanel image={deet.ImageUrl} 
                  title={deet.Title} 
                  subtitle={deet.Subtitle} 
                  button={<NavButton label="Contact Us" path="/contact-us" 
                           styleType={isMobile? "dark-blue-wide": "dark-blue"}/>}
                  styleType={isMobile? "mobile" : "desktop"}/>
    </SwiperSlide>)

  //TODO: Add effect="fade"
  return (<Swiper modules={[Pagination, Autoplay, EffectFade]} 
                  pagination={{clickable: false, dynamicBullets:true}} 
                  autoplay={{delay: 10000, disableOnInteraction: false}}>
    {slides}
  </Swiper>)
}