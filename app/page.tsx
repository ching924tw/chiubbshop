// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative pt-24 md:pt-28">
        {/* Background image */}
        <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
          {/* 用純 CSS 背景，先放一張示意圖。之後你再換成你自己的圖 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1520975693411-bd2f6d3f7d8a?auto=format&fit=crop&w=2400&q=80')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-neutral-950/35" />

          {/* Content */}
          <div className="relative z-10 h-full px-6 md:px-10">
            <div className="mx-auto flex h-full max-w-6xl items-end pb-12 md:pb-16">
              <div className="max-w-2xl text-white">
                <p className="text-xs md:text-sm tracking-[0.35em] opacity-90">
                  CHIUBB SELECT
                </p>
                <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight tracking-wide">
                  以設計眼光挑選日常
                </h1>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-white/90">
                  精選進口日用與材質美學：從肌膚清潔、香氛與小百件，
                  到五金把手與自設家具，讓每一次購物都更接近理想生活。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/categories"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:opacity-90 transition"
                  >
                    開始逛選品
                  </Link>
                  <Link
                    href="/topics"
                    className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                  >
                    讀主題選品誌
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest text-white/80">
                  <span>SKINCARE</span>
                  <span>HOMEWARE</span>
                  <span>HARDWARE</span>
                  <span>FURNITURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Under-hero strip */}
        <div className="border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl bg-neutral-50 p-5">
              <p className="font-medium tracking-wide">嚴選來源</p>
              <p className="mt-2 text-neutral-600 leading-relaxed">
                我們只上架「自己會買」的東西：成分、材質、做工、故事都要過關。
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-50 p-5">
              <p className="font-medium tracking-wide">設計視角</p>
              <p className="mt-2 text-neutral-600 leading-relaxed">
                從生活動線與手感出發，讓物件與空間自然融合。
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-50 p-5">
              <p className="font-medium tracking-wide">持續更新</p>
              <p className="mt-2 text-neutral-600 leading-relaxed">
                子分類會一直長大：不只清潔保養，也會有把手、小百件、家具。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-18">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] text-neutral-500">
              CATEGORIES
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-wide">
              商品分類
            </h2>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed max-w-2xl">
              先用大分類建立選品版圖；每個分類底下的子分類之後都可以自由擴充。
            </p>
          </div>

          <Link
            href="/categories"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 transition"
          >
            查看全部分類
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "肌膚清潔 / 保養",
              desc: "溫和、有效、成分透明。你每天都會用到的那種。",
              href: "/categories/skincare",
            },
            {
              title: "生活小百件",
              desc: "香氛、日用品、選物小物：讓日常更精緻。",
              href: "/categories/homeware",
            },
            {
              title: "特色把手 / 五金",
              desc: "手感與比例很重要。用細節把空間升級。",
              href: "/categories/hardware",
            },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition">
                  →
                </span>
              </div>
              <div className="mt-6 h-[1px] w-full bg-neutral-100" />
              <p className="mt-4 text-xs tracking-widest text-neutral-500">
                ENTER
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link
            href="/categories"
            className="inline-flex w-full items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-50 transition"
          >
            查看全部分類
          </Link>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 text-sm text-neutral-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="tracking-wide">
            © {new Date().getFullYear()} CHIUBB. Curated with a design eye.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:opacity-70 transition">
              關於我們
            </Link>
            <Link href="/news" className="hover:opacity-70 transition">
              最新消息
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition">
              聯絡
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
