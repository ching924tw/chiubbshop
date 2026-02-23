import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pt-[112px] md:pt-[120px]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="grid items-stretch gap-6 md:grid-cols-12">
          {/* Image */}
          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 md:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-[16/11]">
              <Image
                src="/hero.jpg"
                alt="CHIUBB selection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-between rounded-[28px] border border-neutral-200 bg-white p-7 md:col-span-5 md:p-10">
            <div>
              <div className="text-[11px] tracking-[0.28em] text-neutral-500">
                CURATED • IMPORTED • DESIGNED
              </div>

              <h1 className="mt-4 text-[30px] leading-[1.15] tracking-tight text-neutral-900 md:text-[44px]">
                高級選品，留給懂得生活質感的人。
              </h1>

              <p className="mt-4 text-[14px] leading-7 tracking-wide text-neutral-700">
                從肌膚清潔到居家五金、設計家具——CHIUBB 只挑「有故事、有質感、值得長久使用」的好物。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/category/all"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-5 py-3 text-[12px] tracking-[0.22em] text-neutral-900 hover:bg-neutral-900 hover:text-white transition"
                >
                  立即逛選品
                </Link>
                <Link
                  href="/topics"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-[12px] tracking-[0.22em] text-neutral-900 hover:bg-neutral-50 transition"
                >
                  看主題故事
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
              <div>
                <div className="text-[12px] tracking-[0.22em] text-neutral-500">
                  FAST
                </div>
                <div className="mt-1 text-[13px] text-neutral-800">
                  滿額免運
                </div>
              </div>
              <div>
                <div className="text-[12px] tracking-[0.22em] text-neutral-500">
                  CURATED
                </div>
                <div className="mt-1 text-[13px] text-neutral-800">
                  精選大類
                </div>
              </div>
              <div>
                <div className="text-[12px] tracking-[0.22em] text-neutral-500">
                  TRUST
                </div>
                <div className="mt-1 text-[13px] text-neutral-800">
                  正規進口
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="mx-auto mt-14 max-w-6xl px-5 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.28em] text-neutral-500">
              COLLECTIONS
            </div>
            <h2 className="mt-2 text-[22px] tracking-tight text-neutral-900 md:text-[28px]">
              先從大類開始逛
            </h2>
          </div>
          <Link
            href="/category/all"
            className="text-[12px] tracking-[0.22em] text-neutral-700 hover:text-neutral-900"
          >
            查看全部 →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { title: "全部", desc: "所有商品", href: "/category/all" },
            { title: "肌膚保養", desc: "清潔、保濕、修護", href: "/category/skincare" },
            { title: "居家選品", desc: "把手／五金／小擺件", href: "/category/home-living" },
            { title: "設計家具", desc: "自有設計與訂製", href: "/category/furniture" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-[24px] border border-neutral-200 bg-white p-7 hover:bg-neutral-50 transition"
            >
              <div className="text-[12px] tracking-[0.22em] text-neutral-500">
                CATEGORY
              </div>
              <div className="mt-3 text-[18px] text-neutral-900">
                {c.title}
              </div>
              <div className="mt-2 text-[13px] leading-6 text-neutral-600">
                {c.desc}
              </div>
              <div className="mt-6 text-[12px] tracking-[0.22em] text-neutral-800 opacity-70 group-hover:opacity-100">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
