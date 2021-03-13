enum PhoneType {
  HOME = "home",
  OFFICE = "home",
  STUDIO = "home",
}
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
export { PhoneNumberDictionary, PhoneType, Contact };
