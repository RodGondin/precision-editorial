"use client";

import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getCurrencies, getLatestRates } from "@/services/exchange";
import { CurrencySelect } from "@/components/currency-select";

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [coinFrom, setCoinFrom] = useState("USD");
  const [coinTo, setCoinTo] = useState("EUR");
  const [resultRate, setResultRate] = useState(0);
  const [currencyOptions, setCurrencyOptions] = useState([
    "USD",
    "EUR",
    "BRL",
    "GBP",
    "JPY",
  ]);

  const [convertedAmount, setConvertedAmount] = useState(1);
  const [convertedFrom, setConvertedFrom] = useState("USD");
  const [convertedTo, setConvertedTo] = useState("EUR");

  const inputFieldClassName =
    "h-16 w-full rounded-xl border-none bg-(--input-color) px-4 text-(--title-black) font-extrabold";
  const selectFieldClassName =
    "w-full rounded-xl border-none bg-(--input-color) px-4 text-(--title-black) font-extrabold data-[size=default]:h-16 data-[size=sm]:h-16";

  async function handleConvert() {
    const { data } = await getLatestRates(coinFrom, coinTo);
    console.log(data);

    const rate = data?.[coinTo]?.value;
    if (!rate) return;

    const convertedValue = Number((amount * rate).toFixed(3));

    setResultRate(convertedValue);

    setConvertedAmount(amount);
    setConvertedFrom(coinFrom);
    setConvertedTo(coinTo);
  }

  function handleSwapCoins() {
    const from = coinFrom;
    const to = coinTo;
    setCoinFrom(to);
    setCoinTo(from);
  }

  useEffect(() => {
    async function loadCurrencies() {
      try {
        const { codes } = await getCurrencies();
        if (codes.length > 0) {
          setCurrencyOptions(codes);
        }
      } catch {
        // Keeps fallback currency list when API is unavailable.
      }
    }

    loadCurrencies();
  }, []);

  return (
    <main className="relative overflow-hidden bg-(--bg-hero)">
      <div
        className="pointer-events-none absolute inset-0 opacity-58"
        aria-hidden
        style={{
          backgroundImage: [
            "radial-gradient(circle at 18% 10%, rgba(37,99,235,0.22), transparent 42%)",
            "radial-gradient(circle at 84% 22%, rgba(29,78,216,0.16), transparent 44%)",
            "radial-gradient(circle at 30% 86%, rgba(96,165,250,0.10), transparent 36%)",
            "repeating-linear-gradient(112deg, transparent 0 56px, rgba(125,211,252,0.16) 56px 59px, transparent 59px 124px)",
            "repeating-linear-gradient(38deg, transparent 0 60px, rgba(96,165,250,0.14) 60px 63px, transparent 63px 132px)",
            "repeating-linear-gradient(158deg, transparent 0 92px, rgba(59,130,246,0.08) 92px 95px, transparent 95px 156px)",
            "linear-gradient(180deg, rgba(1,8,34,0.05), rgba(1,8,34,0.2))",
          ].join(", "),
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-16 blur-[1px]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(64deg, transparent 0 84px, rgba(147,197,253,0.30) 84px 86px, transparent 86px 168px), repeating-linear-gradient(126deg, transparent 0 96px, rgba(96,165,250,0.22) 96px 98px, transparent 98px 176px)",
        }}
      />

      <section className="relative mx-auto max-w-[1120px] px-6 pb-24 pt-16 md:pt-24">
        <header className="mx-auto max-w-[860px] text-center">
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-(--title-black) md:text-6xl">
            Data Integrity Meets{" "}
            <span className="text-(--primary-light)">Financial Precision</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[760px] text-lg text-[#2a3f6f] md:text-3xl">
            Institutional-grade currency exchange rates for global markets.
            Accurate, real-time, and reliable.
          </p>
        </header>

        <div className="mx-auto mt-12 rounded-3xl bg-(--bg-white) p-6 shadow-[0_24px_80px_rgba(2,12,52,0.5)] md:p-12">
          <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto_1fr]">
            <div className="space-y-2">
              <p className="text-xs font-bold tracking-[0.18em] text-(--secondary)">
                AMOUNT
              </p>
              <Input
                type="number"
                placeholder="1.000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className={inputFieldClassName}
              />
            </div>

            <CurrencySelect
              label="FROM"
              value={coinFrom}
              onValueChange={setCoinFrom}
              options={currencyOptions}
              triggerClassName={selectFieldClassName}
            />

            <div className="flex items-end justify-center md:pb-2">
              <button
                type="button"
                className="grid size-14 place-items-center rounded-full border border-(--border-detail) bg-(--bg-white) cursor-pointer hover:bg-(--border-detail) transition-colors"
                onClick={handleSwapCoins}
              >
                <ArrowRightLeft className="size-6 text-(--primary)" />
              </button>
            </div>

            <CurrencySelect
              label="TO"
              value={coinTo}
              onValueChange={setCoinTo}
              options={currencyOptions}
              triggerClassName={selectFieldClassName}
            />
          </div>

          <div className="mt-8 grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[28px] text-(--secondary)">Market Rate</p>
              <p className="text-[32px] font-bold text-(--title-black) md:text-[56px]">
                {`${convertedAmount}${convertedFrom} = ${resultRate}${convertedTo}`}
              </p>
            </div>

            <Button
              className="h-16 min-w-[220px] rounded-xl text-3xl font-bold hover:bg-(--primary-hover)"
              onClick={handleConvert}
            >
              Convert Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
