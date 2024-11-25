
export type ContactInfo = {
  FullName: string, 
  EmailAddress: string, 
  PhoneNumbers: string[],
  Message: string,
  bIncludeAddressDetails: boolean,
  AddressDetails: AddressDetails
}

export type AddressDetails = {
  AddressLine1: string,
  AddressLine2: string,
  CityTown: string,
  StateCounty: string,
  Postcode: string,
  Country: string
}

export type FlatContactInfo = {
  FullName: string, 
  EmailAddress: string, 
  PhoneNumber0: string, 
  PhoneNumber1: string,
  Message: string,
  AddressLine1: string,
  AddressLine2: string,
  CityTown: string,
  StateCounty: string,
  Postcode: string,
  Country: string
}

export function toContactInfo(flatInfo: FlatContactInfo, bIncludeAddressDetails: boolean):ContactInfo {
  return {
    FullName: flatInfo.FullName,
    EmailAddress: flatInfo.EmailAddress,
    PhoneNumbers: [flatInfo.PhoneNumber0, flatInfo.PhoneNumber1].filter(s => s !== ""),
    Message: flatInfo.Message,
    bIncludeAddressDetails: bIncludeAddressDetails,
    AddressDetails: {
      AddressLine1: flatInfo.AddressLine1,
      AddressLine2: flatInfo.AddressLine2,
      CityTown: flatInfo.CityTown,
      StateCounty: flatInfo.StateCounty,
      Postcode: flatInfo.Postcode,
      Country: flatInfo.Country
    }
  }
}

export const convertNames = (name: string) => {
  switch (name) {
    case "PhoneNumbers[0]":
      return "PhoneNumber0"
    case "PhoneNumbers[1]":
      return "PhoneNumber1"
  }
  return name
}