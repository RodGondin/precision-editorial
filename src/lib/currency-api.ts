const CURRENCY_API_URL = "https://api.currencyapi.com/v3";

function getApiKey() {
  const key = process.env.CURRENCY_API_KEY;
  if (!key) {
    throw new Error("Missing CURRENCY_API_KEY in environment variables");
  }
  return key;
}

export async function fetchLatestRates(params: {
  baseCurrency: string;
  currencies: string;
}) {
  const { baseCurrency, currencies } = params;
  const query = new URLSearchParams({
    base_currency: baseCurrency,
    currencies,
  });

  const response = await fetch(`${CURRENCY_API_URL}/latest?${query.toString()}`, {
    headers: {
      apikey: getApiKey(),
    },
    cache: "no-store",
  });

  const data = await response.json();

  return { response, data };
}

export async function fetchCurrencies() {
  const response = await fetch(`${CURRENCY_API_URL}/currencies`, {
    headers: {
      apikey: getApiKey(),
    },
    cache: "no-store",
  });

  const data = await response.json();

  return { response, data };
}
