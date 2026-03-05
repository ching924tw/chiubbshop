import Image from "next/image";
import Link from "next/link";

type NewInItem = {
  _id: string;
  title?: string;
  brand?: string;
  slug: string;
  price?: number;
  compareAtPrice?: number;
  image?: { url?: string; metadata?: { lqip?: string } };
};

function ntd(price?: number) {
  if (typeof price !== "number") return null;
  return `NT$ ${price.toLocaleString("zh-TW")}`;
}

export default function NewInGrid({ items }: { items: NewInItem[] }) {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight">
          NEW IN！最新商品
        </h2>

        <Link
          href="/category/all"
          className="hidden md:inline-flex rounded-full border border-neutral-200 px-5 py-2 text-sm hover:bg-neutral-50 transition"
        >
          查看所有商品
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
        {items.map((p) => {
          const price = ntd(p.price);
          const compare = ntd(p.compareAtPrice);

          const hasDiscount =
            typeof p.price === "number" &&
            typeof p.compareAtPrice === "number" &&
            p.compareAtPrice > p.price;

          return (
            <Link key={p._id} href={`/p/${p.slug}`} className="group block">
              <div className="rounded-[22px] overflow-hidden border border-neutral-200 bg-neutral-50">
                <div className="aspect-[4/5] relative">
                  {p.image?.url ? (
                    <Image
                      src={p.image.url}
                      alt={p.title ?? "product"}
                      fill
                      className="object-cover transition group-hover:scale-[1.02]"
                      placeholder={p.image.metadata?.lqip ? "blur" : "empty"}
                      blurDataURL={p.image.metadata?.lqip}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-100" />
                  )}
                </div>
              </div>

              <div className="mt-3 space-y-1">
                {/* 品牌 */}
                {p.brand ? (
                  <div className="text-[13px] text-neutral-500 tracking-wide">
                    {p.brand}
                  </div>
                ) : null}

                {/* 商品名稱 */}
                <div className="text-[15px] leading-6 font-medium line-clamp-2">
                  {p.title ?? ""}
                </div>

                {/* 價格 */}
                {price ? (
                  <div className="text-[15px]">
                    {hasDiscount && compare ? (
                      <>
                        <span className="text-neutral-400 line-through mr-2">
                          {compare}
                        </span>
                        <span className="text-red-600 font-semibold">
                          {price}
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold">{price}</span>
                    )}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href="/category/all"
          className="inline-flex rounded-[14px] border border-neutral-900 px-6 py-3 text-sm hover:bg-neutral-900 hover:text-white transition"
        >
          查看所有商品
        </Link>
      </div>
    </section>
  );
}