import { ArrowRightLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
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
              <div className="flex h-16 items-center rounded-xl bg-(--input-color) px-4 text-4xl font-bold text-(--title-black)">
                <span className="mr-3 text-(--secondary)">$</span>
                1000.00
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold tracking-[0.18em] text-(--secondary)">
                FROM
              </p>
              <button
                type="button"
                className="flex h-16 w-full items-center justify-between rounded-xl bg-(--input-color) px-4 text-xl font-bold text-(--title-black)"
              >
                <span className="flex items-center gap-3">
                  <span className="h-4 w-6 rounded bg-cyan-700" />
                  USD
                </span>
                <ChevronDown className="size-6 text-(--secondary)" />
              </button>
            </div>

            <div className="flex items-end justify-center md:pb-2">
              <button
                type="button"
                className="grid size-14 place-items-center rounded-full border border-(--border-detail) bg-(--bg-white)"
              >
                <ArrowRightLeft className="size-6 text-(--primary)" />
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold tracking-[0.18em] text-(--secondary)">
                TO
              </p>
              <button
                type="button"
                className="flex h-16 w-full items-center justify-between rounded-xl bg-(--input-color) px-4 text-xl font-bold text-(--title-black)"
              >
                <span className="flex items-center gap-3">
                  <span className="h-4 w-6 rounded bg-yellow-800" />
                  EUR
                </span>
                <ChevronDown className="size-6 text-(--secondary)" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[28px] text-(--secondary)">Market Rate</p>
              <p className="text-[32px] font-bold text-(--title-black) md:text-[56px]">
                1USD = 0.9241EUR
              </p>
            </div>

            <Button className="h-16 min-w-[220px] rounded-xl text-3xl font-bold hover:bg-(--primary-hover)">
              Convert Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
