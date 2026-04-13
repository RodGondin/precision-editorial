"use client";

import { Menu, Search, Bell, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const activeLinkStyle =
    "text-(--primary-light) border-b-2 border-(--primary-light)";

  function handleOpenMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="w-full border-b-(--border-detail) border-b-2">
      <div className="py-4 px-6 flex items-center justify-between max-h-16">
        <div className="flex items-center gap-3 text-(--primary-dark)">
          <button
            className="w-8.5 h-8.5 flex items-center justify-center rounded-md hover:bg-(--input-color) transition-colors cursor-pointer md:hidden"
            onClick={handleOpenMenu}
          >
            <span>
              <Menu width={20} height={20} strokeWidth={3} />
            </span>
          </button>
          <h4 className="text-[20px] md:text-[24px] font-extrabold">
            Precision Editorial
          </h4>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li
              className={`hover:text-(--primary-hover) transition-colors text-[14px] font-semibold ${pathname === "/" ? activeLinkStyle : ""}`}
            >
              <Link href="/">Converter</Link>
            </li>
            <li
              className={`hover:text-(--primary-hover) transition-colors text-[14px] font-semibold ${pathname === "/rates" ? activeLinkStyle : ""}`}
            >
              <Link href="/rates">Rates</Link>
            </li>
            <li
              className={`hover:text-(--primary-hover) transition-colors text-[14px] font-semibold ${pathname === "/charts" ? activeLinkStyle : ""}`}
            >
              <Link href="/charts">Charts</Link>
            </li>
            <li
              className={`hover:text-(--primary-hover) transition-colors text-[14px] font-semibold ${pathname === "/alerts" ? activeLinkStyle : ""}`}
            >
              <Link href="/alerts">Alerts</Link>
            </li>
            <li
              className={`hover:text-(--primary-hover) transition-colors text-[14px] font-semibold ${pathname === "/tools" ? activeLinkStyle : ""}`}
            >
              <Link href="/tools">Tools</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <span className="w-8.5 h-8.5 flex items-center md:hidden">
            <Search width={20} height={20} strokeWidth={3} />
          </span>
          <span className="w-8.5 h-8.5 flex items-center">
            <Bell width={20} height={20} strokeWidth={3} />
          </span>
          <span className="w-8.5 h-8.5 items-center hidden md:flex">
            <CircleUserRound width={20} height={20} strokeWidth={3} />
          </span>
        </div>
      </div>
    </header>
  );
}
