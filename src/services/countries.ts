export type CurrencyFlagInfo = {
  currency: string;
  country: string | null;
  cca2: string | null;
  flag: string | null;
  flagAlt: string | null;
};

export async function getAllCountryFlags() {
  const res = await fetch("/api/countries/all");

  if (!res.ok) {
    throw new Error("Erro ao requisitar mapa de bandeiras: " + res.status);
  }

  return res.json() as Promise<{
    codes: string[];
    data: Record<string, CurrencyFlagInfo>;
  }>;
}
