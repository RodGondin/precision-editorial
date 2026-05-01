import { NextResponse } from "next/server";
import { fetchCountryInfoByCurrency } from "@/lib/restcountries-api";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const currency = searchParams.get("currency")?.toUpperCase();

    if (!currency) {
      return NextResponse.json(
        { error: "Query param 'currency' is required" },
        { status: 400 },
      );
    }

    const { response, data } = await fetchCountryInfoByCurrency({ currency });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch country info" },
        { status: response.status },
      );
    }

    const country = data?.[0];

    if (!country) {
      return NextResponse.json(
        { error: "Country not found for this currency" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        currency,
        country: country.name?.common ?? null,
        cca2: country.cca2 ?? null,
        flag: country.flags?.svg ?? country.flags?.png ?? null,
        flagAlt: country.flags?.alt ?? null,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error while fetching country info" },
      { status: 500 },
    );
  }
}
