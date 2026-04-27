export async function getLatestRates(base: string, currencies: string) {
  const params = new URLSearchParams({
    base,
    currencies,
  });

  const res = await fetch(`/api/exchange/latest?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Erro a requisitar currencies: " + res.status);
  }

  return res.json();
}

export async function getCurrencies() {
  const res = await fetch("/api/exchange/currencies");

  if (!res.ok) {
    throw new Error("Erro a requisitar lista de moedas: " + res.status);
  }

  return res.json() as Promise<{
    codes: string[];
    data: Record<string, { code: string; name?: string; symbol?: string }>;
  }>;
}
