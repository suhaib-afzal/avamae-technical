import { BannerDetails, useGetBannerDetails } from "../useGetBannerDetails";
import { waitFor } from "@testing-library/react";
import axios from "axios";

jest.mock("axios")
const mockAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>

const successfulGet : BannerDetails = 
  {
    Details : [
      {
        Title : "kdcicdcm",
        Subtitle : "dcckdckcm",
        ImageUrl: "sdjniod"
      },
      {
        Title : "kcdocdom",
        Subtitle : "ckmdcmdck",
        ImageUrl: "kcmdcod"
      }
    ],
    Status : "jcidoidc",
    Errors : []
  }


test("useGetBannerDetails returns expected details", () => {
  mockAxiosGet.mockResolvedValue(successfulGet);
  waitFor(() => {
    const bannerdetails = useGetBannerDetails()
    expect(bannerdetails).toBe(successfulGet);
  })  
})

