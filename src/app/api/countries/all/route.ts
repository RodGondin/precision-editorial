import { NextResponse } from "next/server";
import { fetchAllCountries } from "@/lib/restcountries-api";

type CurrencyFlagInfo = {
  currency: string;
  country: string | null;
  cca2: string | null;
  flag: string | null;
  flagAlt: string | null;
};

const preferredCurrencyCountries: Record<string, string> = {
  AUD: "AU",
  BRL: "BR",
  CAD: "CA",
  CHF: "CH",
  CNY: "CN",
  GBP: "GB",
  JPY: "JP",
  MXN: "MX",
  NOK: "NO",
  NZD: "NZ",
  PEN: "PE",
  SEK: "SE",
  SGD: "SG",
  USD: "US",
  ZAR: "ZA",
};

function toCurrencyFlagInfo(
  currency: string,
  country: {
    name?: { common?: string };
    cca2?: string;
    flags?: { svg?: string; png?: string; alt?: string };
  },
): CurrencyFlagInfo {
  return {
    currency,
    country: country.name?.common ?? null,
    cca2: country.cca2 ?? null,
    flag: country.flags?.svg ?? country.flags?.png ?? null,
    flagAlt: country.flags?.alt ?? null,
  };
}

function applyCurrencyOverrides(
  currencyMap: Map<string, CurrencyFlagInfo>,
) {
  currencyMap.set("EUR", {
    currency: "EUR",
    country: "European Union",
    cca2: "EU",
    flag: "/eu-union.svg",
    flagAlt: "European Union flag",
  });
}

export async function GET() {
  try {
    const { response, data } = await fetchAllCountries();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch countries list" },
        { status: response.status },
      );
    }

    const currencyMap = new Map<string, CurrencyFlagInfo>();

    for (const country of data) {
      const currencies = country.currencies ?? {};

      for (const currency of Object.keys(currencies)) {
        const existing = currencyMap.get(currency);
        const preferredCca2 = preferredCurrencyCountries[currency];
        const isPreferredCountry =
          preferredCca2 !== undefined && country.cca2 === preferredCca2;

        if (!existing || isPreferredCountry) {
          currencyMap.set(currency, toCurrencyFlagInfo(currency, country));
        }
      }
    }

    applyCurrencyOverrides(currencyMap);

    const entries = Array.from(currencyMap.entries()).sort(([a], [b]) =>
      a.localeCompare(b),
    );

    return NextResponse.json(
      {
        codes: entries.map(([currency]) => currency),
        data: Object.fromEntries(entries),
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error while fetching countries data" },
      { status: 500 },
    );
  }
}
