import { NextResponse } from "next/server";
import { fetchCurrencies } from "@/lib/currencyapi";

export async function GET() {
  try {
    const { response, data } = await fetchCurrencies();
    const currencyMap = data?.data ?? {};
    const codes = Object.keys(currencyMap);

    return NextResponse.json(
      {
        codes,
        data: currencyMap,
      },
      { status: response.status },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch currency list" },
      { status: 500 },
    );
  }
}
