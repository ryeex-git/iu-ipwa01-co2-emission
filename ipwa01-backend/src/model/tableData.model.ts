export interface TableData {
  data: DetailedData[];
}

interface DetailedData {
  companyName: string;
  country: string;
  emissionInTonnePerYear: number;
  unitPerYear: number;
  companyType: string[];
  continent: string;
}
