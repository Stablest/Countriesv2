export type CountryType = {
  flags: string[];
  name: Name;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Currencies;
  languages: Languages;
  borders: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

export type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

export type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type Languages = {
  [key: string]: string;
};
