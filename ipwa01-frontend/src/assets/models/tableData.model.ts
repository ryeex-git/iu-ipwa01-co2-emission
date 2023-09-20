export interface TableData {
  data: DetailedData[];
}

interface DetailedData {
  countPerUnitProduced?: number;
  companyName: string;
  country: string;
  emissionInTonnePerYear: number;
  unitPerYear: number;
  companyType: string[];
}
