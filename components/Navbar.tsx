"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

type CategoryItem = { href: string; label: string };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [catOpenMobile, setCatOpenMobile] = useState(false);
  const [catOpenDesktop, setCatOpenDesktop] = useState(false);

  const categories: CategoryItem[] = [
    { href: "/shop/cleanse", label: "肌膚清潔與沐浴" },
    { href: "/shop/intimate", label: "私密保養" },
    { href: "/shop/face", label: "臉部保養" },
    { href: "/shop/body", label: "身體保養" },
    { href: "/shop/home-fragrance", label: "香氛與居家" },
    { href: "/shop/hardware", label: "五金把手與門控" },
    { href: "/shop/objects", label: "小百件與選物" },
    { href: "/shop/furniture", label: "家具與自設計" },
  ];

  const navLinks = [
    { href: "/", label: "首頁" },
    // 商品分類是 dropdown，另外 render
    { href: "/topics", label: "主題" },
    { href: "/news", label: "最新消息" },
    { href: "/about", label: "關於我們" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Top bar */}
      <div
        className="
          px-6 md:px-10 py-5 md:py-6
          flex items-center justify-between
          bg-white/95 backdrop-blur
          text-neutral-900
          shadow-sm
          border-b border-neutral-200
        "
      >
        {/* Logo (Left) */}
        <div className="text-lg md:text-2xl font-semibold tracking-wide">
          <Link href="/" onClick={() => setOpen(false)}>
            CHIUBB
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-sm md:text-lg font-medium tracking-wide">
            {/* Home */}
            <li>
              <Link href="/" className="hover:opacity-70 transition">
                首頁
              </Link>
            </li>

            {/* Categories dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setCatOpenDesktop(true)}
              onMouseLeave={() => setCatOpenDesktop(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 hover:opacity-70 transition"
                aria-haspopup="menu"
                aria-expanded={catOpenDesktop}
                onClick={() => setCatOpenDesktop((v) => !v)}
              >
                商品分類 <ChevronDown className="h-4 w-4" />
              </button>

              {catOpenDesktop && (
                <div
                  className="
                    absolute left-0 top-[calc(100%+14px)]
                    w-[260px]
                    rounded-2xl border border-neutral-200
                    bg-white/98 backdrop-blur
                    shadow-lg
                    overflow-hidden
                  "
                >
                  <ul className="py-2">
                    {categories.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="
                            block px-4 py-3 text-sm
                            hover:bg-neutral-50
                            transition
                          "
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Other links */}
            {navLinks
              .filter((x) => x.href !== "/")
              .map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:opacity-70 transition">
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <Link
              href="/search"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
              aria-label="搜尋"
              title="搜尋"
            >
              <Search className="h-5 w-5" />
            </Link>

            <Link
              href="/favorites"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
              aria-label="最愛"
              title="最愛"
            >
              <Heart className="h-5 w-5" />
            </Link>

            <Link
              href="/cart"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
              aria-label="購物車"
              title="購物車"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>

            <Link
              href="/account"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
              aria-label="會員"
              title="會員"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/search"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
            aria-label="搜尋"
          >
            <Search className="h-5 w-5" />
          </Link>

          <Link
            href="/cart"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
            aria-label="購物車"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>

          <button
            className="inline-flex items-center justify-center w-10 h-10"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-6">
              <span
                className={`block h-[2px] w-6 bg-current transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-current my-[6px] transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-current transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur text-neutral-900 border-b border-neutral-200">
          <div className="px-6 py-6 flex flex-col gap-4 text-[14px] tracking-widest">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">
              首頁
            </Link>

            {/* Mobile categories accordion */}
            <button
              type="button"
              className="py-2 inline-flex items-center justify-between"
              onClick={() => setCatOpenMobile((v) => !v)}
              aria-expanded={catOpenMobile}
            >
              <span>商品分類</span>
              <ChevronRight
                className={`h-4 w-4 transition ${
                  catOpenMobile ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>

            {catOpenMobile && (
              <div className="pl-3 border-l border-neutral-200">
                {categories.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => {
                      setOpen(false);
                      setCatOpenMobile(false);
                    }}
                    className="block py-2 opacity-90 hover:opacity-70 transition"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/topics"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              主題
            </Link>
            <Link href="/news" onClick={() => setOpen(false)} className="py-2">
              最新消息
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2">
              關於我們
            </Link>

            <div className="pt-2 flex items-center gap-2">
              <Link
                href="/favorites"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
                aria-label="最愛"
              >
                <Heart className="h-5 w-5" />
              </Link>
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition"
                aria-label="會員"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
