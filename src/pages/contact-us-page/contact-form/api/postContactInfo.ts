import axios from "axios"
import { ContactInfo } from "../data/ContactInfo"


export const postContactInfo = async (contactInfo: ContactInfo): Promise<ExpectedResponse | UnexpectedResponse> => {
  const res = await axios.post<ExpectedResponse>(
    'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit',
    contactInfo,
    {validateStatus: () => true}
  )
  if (res.status === 200 || res.status === 400)
  {
    return res.data
  }
  
  return {Status: res.status, StatusText: res.statusText}
}

export type UnexpectedResponse = {
  Status: number,
  StatusText: string
}

export type ExpectedResponse = {
  Status: string,
  Errors: FieldError[]
}

type FieldError = {
  FieldName: string,
  MessageCode: string
}

export function isExpectedResponse(res: ExpectedResponse | UnexpectedResponse): res is ExpectedResponse {
  return (typeof res.Status === "string")
}

////////////////////////////////////////////////////////////////////////////////////////
// TESTING DUMMIES

export const postContactInfoSucceeds = async (details: any) => {
  return {
    Status: "1",
    Errors: [] as FieldError[]
  }
}

export const postContactInfoFails = async (details: any) => {
  return {
    Status: 500,
    StatusText: "NOPE BRO"
  }
}

/////////////////////////////////////////////////////////////////////////////////////////