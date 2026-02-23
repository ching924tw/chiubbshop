"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";

type CategoryItem = { href: string; label: string };

const CATEGORIES: CategoryItem[] = [
  { href: "/category/skincare", label: "肌膚保養" },
  { href: "/category/body", label: "身體清潔" },
  { href: "/category/intimate", label: "私密保養" },
  { href: "/category/fragrance", label: "香氛生活" },
  { href: "/category/home-living", label: "居家選品（把手／五金／小百件）" },
  { href: "/category/furniture", label: "設計家具（自有設計）" },
  { href: "/category/gift-sets", label: "禮盒 / 組合" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false); // desktop dropdown
  const [catOpenMobile, setCatOpenMobile] = useState(false); // mobile accordion
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setCatOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const mainLinks = [
    { href: "/", label: "首頁" },
    { href: "/topics", label: "主題" },
    { href: "/news", label: "最新消息" },
    { href: "/about", label: "關於我們" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* top announcement bar */}
      <div className="border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-2 text-[12px] tracking-[0.18em] text-neutral-700">
          台灣滿 NT$1,500 免運｜新品上架中
        </div>
      </div>

      {/* nav */}
      <nav className="border-b border-neutral-200 bg-white/92 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-4">
              <button
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>

              <Link
                href="/"
                className="text-[18px] md:text-[22px] font-semibold tracking-[0.18em] text-neutral-900"
                onClick={() => {
                  setMobileOpen(false);
                  setCatOpen(false);
                }}
              >
                CHIUBB
              </Link>
            </div>

            {/* Center: Desktop menu */}
            <div className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.22em] text-neutral-800">
              <Link href="/" className="hover:opacity-70 transition">
                首頁
              </Link>

              {/* 商品分類 dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="inline-flex items-center gap-2 hover:opacity-70 transition"
                  onClick={() => setCatOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={catOpen}
                >
                  商品分類 <ChevronDown className="h-4 w-4" />
                </button>

                {catOpen && (
                  <div
                    className="absolute left-0 mt-4 w-[320px] rounded-2xl border border-neutral-200 bg-white shadow-sm p-3"
                    role="menu"
                  >
                    <div className="px-3 py-2 text-[11px] tracking-[0.2em] text-neutral-500">
                      SHOP BY CATEGORY
                    </div>
                    <ul className="flex flex-col">
                      {CATEGORIES.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block rounded-xl px-3 py-2 text-[13px] tracking-wide text-neutral-800 hover:bg-neutral-50"
                            onClick={() => setCatOpen(false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {mainLinks
                .filter((l) => l.href !== "/")
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="hover:opacity-70 transition"
                  >
                    {l.label}
                  </Link>
                ))}
            </div>

            {/* Right: icons */}
            <div className="flex items-center gap-2">
              <Link
                href="/search"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
                aria-label="搜尋"
              >
                <Search className="h-5 w-5" />
              </Link>
              <Link
                href="/favorites"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
                aria-label="最愛"
              >
                <Heart className="h-5 w-5" />
              </Link>
              <Link
                href="/account"
                className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
                aria-label="會員"
              >
                <User className="h-5 w-5" />
              </Link>
              <Link
                href="/cart"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
                aria-label="購物車"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden">
            <div
              className="fixed inset-0 bg-black/30"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed right-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <div className="text-[16px] font-semibold tracking-[0.18em]">
                  MENU
                </div>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-5 py-4">
                <Link
                  href="/"
                  className="block py-3 text-[14px] tracking-[0.18em]"
                  onClick={() => setMobileOpen(false)}
                >
                  首頁
                </Link>

                <button
                  className="flex w-full items-center justify-between py-3 text-[14px] tracking-[0.18em]"
                  onClick={() => setCatOpenMobile((v) => !v)}
                >
                  商品分類
                  <ChevronDown
                    className={`h-4 w-4 transition ${
                      catOpenMobile ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {catOpenMobile && (
                  <div className="mb-2 rounded-2xl bg-neutral-50 p-3">
                    {CATEGORIES.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-3 py-2 text-[14px] text-neutral-800 hover:bg-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  href="/topics"
                  className="block py-3 text-[14px] tracking-[0.18em]"
                  onClick={() => setMobileOpen(false)}
                >
                  主題
                </Link>
                <Link
                  href="/news"
                  className="block py-3 text-[14px] tracking-[0.18em]"
                  onClick={() => setMobileOpen(false)}
                >
                  最新消息
                </Link>
                <Link
                  href="/about"
                  className="block py-3 text-[14px] tracking-[0.18em]"
                  onClick={() => setMobileOpen(false)}
                >
                  關於我們
                </Link>

                <div className="mt-6 border-t border-neutral-200 pt-4">
                  <div className="flex gap-2">
                    <Link
                      href="/search"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-100"
                      aria-label="搜尋"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Search className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/favorites"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-100"
                      aria-label="最愛"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Heart className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/account"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-100"
                      aria-label="會員"
                      onClick={() => setMobileOpen(false)}
                    >
                      <User className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/cart"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-100"
                      aria-label="購物車"
                      onClick={() => setMobileOpen(false)}
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
