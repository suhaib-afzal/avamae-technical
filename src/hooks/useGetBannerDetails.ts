import { useEffect, useState } from "react";
import axios from "axios";


export const useGetBannerDetails = () => {
  
  const [bannerDetails, setBannerDetails] = useState<BannerDetails>();

  useEffect(() => {
    axios.get<BannerDetails>(
      'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
    )
    .then(response => setBannerDetails(response.data))
    .catch(err => console.log(err))

  }, [])
    
  return bannerDetails; 
}

export interface BannerDetails {
  Details: ImageDetail[],
  Status: string,
  Errors: Error[]
}

export interface ImageDetail {
  Title: string,
  Subtitle: string,
  ImageUrl: string
}

export interface Error {
  FieldName: string,
  MessageCode: string
}

