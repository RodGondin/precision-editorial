import { NextResponse } from "next/server";
import { fetchLatestRates } from "@/lib/currency-api";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const baseCurrency =
      searchParams.get("base") || searchParams.get("base_currency") || "USD";
    const currencies = searchParams.get("currencies") || "EUR";

    if (!currencies) {
      return NextResponse.json(
        { error: "Query param 'currencies' is required" },
        { status: 400 },
      );
    }

    const { response, data } = await fetchLatestRates({
      baseCurrency,
      currencies,
    });
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch exchange rates" },
      { status: 500 },
    );
  }
}
