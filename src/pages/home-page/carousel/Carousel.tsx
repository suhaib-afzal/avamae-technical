import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { isUnexpectedErrorResponse, useGetBannerDetails } from "./hooks/useGetBannerDetails"
import { TitlePanel } from "../../../core-components/panels/title-panel/TitlePanel"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { IsMobileContext } from "../../../app/App";
import { useContext } from "react";
import { NavButton } from "../../../components/nav-button/NavButton";
import { LoadingPanel } from "../../../core-components/panels/loading-panel/LoadingPanel";
import { ErrorPanel } from "../../../core-components/panels/error-panel/ErrorPanel";


export const Carousel : React.FC = () => {
  const bannerDetails = useGetBannerDetails()
  const isMobile = useContext(IsMobileContext);

  //TODO: Add timeout so that enough time loading will
  // eventually fail
  const isLoading = bannerDetails === undefined 
  if (isLoading)
  {
    return <LoadingPanel/>
  }
  
  //TODO: Improve error messages
  const isUnexpectedErrorState = isUnexpectedErrorResponse(bannerDetails)
  if (isUnexpectedErrorState)
  {
    return <ErrorPanel errorMsg={`Error code: ${bannerDetails.Status}, please try again later`}/>
  }

  const isRequestFieldErrors = bannerDetails.Errors.length > 0
  if (isRequestFieldErrors)
  {
    return <ErrorPanel errorMsg={`Request Error, please contact us`}/>
  }

  const imageDeets = bannerDetails.Details

  //Image panel styling on desktop will always show the top of the image,
  //for the image of the office, this means we only see the ceiling,
  //this is not the intended effect, but to achieve the intended effect with
  //the other images, we need this to happen. 
  //TODO: Introduce some way to distingusish the required cropping, should be
  //      specified by the API, so the frontend doesnt need to somehow identify images
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