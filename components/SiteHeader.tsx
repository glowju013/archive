// components/SiteHeader.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV = [
    { label: "plants", href: "/plants"},
    { label: "sky", href: "/sky"},
    { label: "churrr", href: "/churrr"},
    { label: "about", href: "/about"},
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="flex w-full items-center justify-between py-6">
      <label className="text-large flex justify-center items-center">GLOW</label>

      <nav className="hidden md:flex flex-row gap-6 text-header">
        {NAV.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className={clsx(
                    "relative pb-1 hover:opacity-80 transition-opacity",
                    isActive(item.href) && "underline underline-offset-4"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
            >
                {item.label}
            </Link>
        ))}
      </nav>
      <button
        type="button"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-row items-center justify-center w-6 h-6 md:w-10 md:h-10 md:hidden"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-[64px] mx-5 overflow-hidden transition-[max-height,opacity] duration-300 ease-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-4 px-5 py-4 text-large text-header">
          {NAV.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                "text-left py-1",
                isActive(item.href) && "underline underline-offset-4"
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
                {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
