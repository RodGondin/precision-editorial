"use client";

import {
  Menu,
  Bell,
  CircleUserRound,
  Repeat,
  ChartNoAxesCombined,
  ChartColumnBig,
  Wrench,
  BellRing,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

export function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Converter", icon: Repeat },
    { href: "/rates", label: "Rates", icon: ChartNoAxesCombined },
    { href: "/charts", label: "Charts", icon: ChartColumnBig },
    { href: "/tools", label: "Tools", icon: Wrench },
    { href: "/alerts", label: "Alerts", icon: BellRing },
  ] as const;

  return (
    <header className="w-full border-b-(--border-detail) border-b-2 bg-(--bg-white)">
      <div className="py-4 px-6 flex items-center justify-between max-h-16">
        <div className="flex items-center gap-3 text-(--primary-dark)">
          <Sheet>
            <SheetTrigger asChild>
              <button className="w-8.5 h-8.5 flex items-center justify-center rounded-md hover:bg-(--input-color) transition-colors cursor-pointer md:hidden">
                <Menu width={20} height={20} strokeWidth={3} />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              showCloseButton={false}
              className="w-[85vw] max-w-[360px] p-0 bg-(--bg-white)"
            >
              <SheetHeader className="p-6 pb-4">
                <div className="size-20 rounded-2xl bg-(--input-color)" />
                <SheetTitle className="mt-3 text-4xl leading-tight font-extrabold text-(--primary-dark)">
                  Alexander Vance
                </SheetTitle>
                <SheetDescription className="text-lg text-(--secondary)">
                  Premium Member
                </SheetDescription>
                <p className="text-(--secondary)">ID: 8842-ARCH</p>
              </SheetHeader>

              <div className="flex flex-1 flex-col gap-3 px-3 py-4">
                {links.map(({ href, label, icon: Icon }) => {
                  const isActive = pathname === href;

                  return (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-3xl transition-colors ${
                          isActive
                            ? "bg-(--input-color) text-(--primary-dark) font-bold"
                            : "text-(--secondary) hover:bg-(--input-color)"
                        }`}
                      >
                        <Icon className="size-6" strokeWidth={2.2} />
                        <span>{label}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              <Separator />

              <SheetFooter className="p-4 gap-4">
                <div className="rounded-2xl bg-(--input-color) p-4">
                  <p className="text-xs font-semibold tracking-[0.12em] text-(--secondary)">
                    MARKET SENTIMENT
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="font-bold text-red-600">Bearish</span>
                    <div className="h-2 flex-1 rounded-full bg-(--bg-white)">
                      <div className="h-full w-[74%] rounded-full bg-red-600" />
                    </div>
                    <span className="font-bold text-(--title-black)">74%</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="h-14 w-full border-(--secondary) text-(--secondary)"
                >
                  <LogOut className="mr-2 size-5" />
                  SIGN OUT
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <h4 className="text-[20px] md:text-[24px] font-extrabold">
            Precision Editorial
          </h4>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li
                  key={href}
                  className={`hover:text-(--primary-hover) transition-colors text-[14px] font-semibold ${
                    isActive
                      ? "text-(--primary-light) border-b-2 border-(--primary-light)"
                      : ""
                  }`}
                >
                  <Link href={href}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <span className="w-8.5 h-8.5 flex items-center">
            <Bell width={20} height={20} strokeWidth={3} />
          </span>
          <span className="w-8.5 h-8.5 items-center hidden md:flex">
            <CircleUserRound width={20} height={20} strokeWidth={3} />
          </span>
          <Button className="hover:bg-(--primary-hover) cursor-pointer md:inline-flex hidden" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
