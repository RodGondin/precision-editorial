const RESTCOUNTRIES_API_URL = "https://restcountries.com/v3.1";

export type RestCountry = {
  name?: {
    common?: string;
  };
  cca2?: string;
  flags?: {
    svg?: string;
    png?: string;
    alt?: string;
  };
  currencies?: Record<
    string,
    {
      name?: string;
      symbol?: string;
    }
  >;
};

export type RestCountriesCurrencyResponse = RestCountry[];

export async function fetchCountryInfoByCurrency(params: {
  currency: string;
}) {
  const { currency } = params;

  const response = await fetch(
    `${RESTCOUNTRIES_API_URL}/currency/${currency}?fields=name,cca2,flags,currencies`,
    {
      cache: "no-store",
    },
  );

  const data = (await response.json()) as RestCountriesCurrencyResponse;

  return { response, data };
}

export async function fetchAllCountries() {
  const response = await fetch(
    `${RESTCOUNTRIES_API_URL}/all?fields=name,cca2,flags,currencies`,
    {
      cache: "no-store",
    },
  );

  const data = (await response.json()) as RestCountry[];

  return { response, data };
}
