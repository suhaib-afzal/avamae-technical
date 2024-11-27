import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";


export const useGetBannerDetails = (): BannerDetails | UnexpectedErrorResponse | undefined => {
  
  const [bannerDetailsOrError, setBannerDetailsOrError] = useState<BannerDetails | UnexpectedErrorResponse>();

  useEffect(() => {
    axios.get<BannerDetails>(
      'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details',
      {validateStatus: () => true}
    )
    .then(response => {
      if (response.status === 200)
      {
        setBannerDetailsOrError(response.data)
      }
      else 
      {
        setBannerDetailsOrError({Status: response.status, StatusText: response.statusText}) 
      }
    })

  }, [])
    
  return bannerDetailsOrError; 
}

export const useGetBannerDetailsFAILS = (): BannerDetails | UnexpectedErrorResponse | undefined  => {
  return {Status: 600, StatusText: "Nope"}
}

export function isUnexpectedErrorResponse(res: BannerDetails | UnexpectedErrorResponse): res is UnexpectedErrorResponse {
  return (typeof res.Status === "number")
}

export interface UnexpectedErrorResponse {
  Status: number,
  StatusText: string
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

