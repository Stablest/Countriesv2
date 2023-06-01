export type CountryType = {
  flags: string[];
  name: {
    commom: string;
    official: string;
    nativename: [
      {
        [key: string]: {
          official: string;
          commom: string;
        };
      }
    ];
  };
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  tld: string[];
  currencies: [
    {
      [key: string]: {
        name: string;
        symbol: string;
      };
    }
  ];
  languages: [
    {
      [key: string]: string;
    }
  ];
  border: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
};
