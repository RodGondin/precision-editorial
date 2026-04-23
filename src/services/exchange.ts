export async function getLatestRates(
  base_currency: string,
  currencies: string,
) {
  const res = await fetch(
    `/api/exchange/latest?currencies=${currencies}&base_currency=${base_currency}`,
  );

  if (!res.ok) {
    throw new Error("Erro a requisitar currencies: " + res.status);
  }

  return res.json();
}
