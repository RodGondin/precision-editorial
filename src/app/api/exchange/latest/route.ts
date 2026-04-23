import { NextResponse } from "next/server";

const CURRENCY_API_URL = "https://api.currencyapi.com/v3";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const base_currency = searchParams.get("base_currency") || "USD";
    const currency = searchParams.get("currencies") || "EUR";

    if (!currency) {
      return NextResponse.json(
        { error: "Currency is required" },
        { status: 400 },
      );
    }

    const response = await fetch(
      `${CURRENCY_API_URL}/latest?&currencies=${currency}&base_currency=${base_currency}`,
      {
        headers: {
          apikey: process.env.CURRENCY_API_KEY!,
        },
        cache: "no-store",
      },
    );

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch exchange rates" },
      { status: 500 },
    );
  }
}
