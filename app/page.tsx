import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pt-[112px] md:pt-[120px]">
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-12">
          
          {/* 左側大圖區塊 */}
          <div className="md:col-span-7 rounded-[28px] overflow-hidden border border-neutral-200">
            <div className="aspect-[4/5] md:aspect-[16/11] bg-neutral-100" />
          </div>

          {/* 右側品牌區 */}
          <div className="md:col-span-5 rounded-[28px] border border-neutral-200 bg-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="text-[11px] tracking-[0.28em] text-neutral-500">
                CHIUBB SELECT
              </div>

              <h1 className="mt-4 text-[32px] md:text-[44px] leading-[1.15]">
                以設計眼光挑選日常
              </h1>

              <p className="mt-4 text-[14px] leading-7 text-neutral-700">
                從肌膚清潔、香氛到居家五金與設計家具，
                我們只挑真正值得留下的物件。
              </p>

              <div className="mt-7 flex gap-3">
                <Link
                  href="/category/all"
                  className="rounded-full border border-neutral-900 px-6 py-3 text-[12px] tracking-[0.2em] hover:bg-neutral-900 hover:text-white transition"
                >
                  立即選購
                </Link>

                <Link
                  href="/topics"
                  className="rounded-full border border-neutral-200 px-6 py-3 text-[12px] tracking-[0.2em] hover:bg-neutral-50 transition"
                >
                  主題故事
                </Link>
              </div>
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-6 grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-neutral-500 tracking-widest text-xs">
                  SHIPPING
                </div>
                <div className="mt-1">滿額免運</div>
              </div>
              <div>
                <div className="text-neutral-500 tracking-widest text-xs">
                  CURATED
                </div>
                <div className="mt-1">精選分類</div>
              </div>
              <div>
                <div className="text-neutral-500 tracking-widest text-xs">
                  TRUST
                </div>
                <div className="mt-1">正規來源</div>
              </div>
            </div>
          </div>
        </div>

        {/* 下方分類卡片 */}
        <div className="mt-20 grid gap-6 md:grid-cols-3 pb-16">
          {[
            { title: "全部", href: "/category/all" },
            { title: "肌膚保養", href: "/category/skincare" },
            { title: "居家選品", href: "/category/home-living" },
            { title: "設計家具", href: "/category/furniture" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[24px] border border-neutral-200 p-8 hover:bg-neutral-50 transition"
            >
              <div className="text-xs tracking-widest text-neutral-500">
                CATEGORY
              </div>
              <div className="mt-3 text-lg">{item.title}</div>
              <div className="mt-6 text-sm opacity-60">Explore →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
