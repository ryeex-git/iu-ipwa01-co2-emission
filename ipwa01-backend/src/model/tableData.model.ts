export interface TableData {
  data: DetailedData[];
}

export interface ImprintData {
  name: string;
  street: string;
  postalcode: string;
  number: string;
  email: string;
  headOfOffice: string;
  disclaimer: string;
}

interface DetailedData {
  companyName: string;
  country: string;
  emissionInTonnePerYear: number;
  unitPerYear: number;
  companyType: string[];
  continent: string;
}
