import { NextResponse } from "next/server";

const CURRENCY_API_URL = "https://api.currencyapi.com/v3";

export async function GET() {
  const response = await fetch(`${CURRENCY_API_URL}/latest`, {
    headers: {
      apikey: process.env.CURRENCY_API_KEY!,
    },
    cache: "no-store",
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
