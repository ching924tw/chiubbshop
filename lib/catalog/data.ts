import { Product } from "./types";

export const products: Product[] = [
  {
    id: "cav-anti-bac-250",
    slug: "roge-cavailles-anti-bac-250",
    name: "Rogé Cavaillès 溫和潔膚露 250ml",
    brand: "Rogé Cavaillès",
    texture: "潔膚露 / 凝露",
    expiry: "2027-10",
    description:
      "【商品特色】\n- 溫和潔淨，適合日常\n- 適合一般/敏感肌\n\n【使用方式】\n沐浴時取適量起泡清潔後沖淨。\n\n【注意事項】\n若有不適請停止使用。",
    sku: "CAV-AB-250", // 可刪掉，代表你不想填也 OK
    specs: [
      {
        title: "基本資訊",
        items: [
          { label: "容量", value: "250ml" },
          { label: "產地", value: "France" },
        ],
      },
      {
        title: "成分與特性",
        items: [
          {
            label: "適用膚質",
            children: [
              { label: "敏感肌", value: "適用" },
              { label: "乾燥肌", value: "適用" },
            ],
          },
          {
            label: "香味",
            value: "淡香",
            notes: "以實際商品標示為準",
          },
        ],
      },
      {
        title: "使用與保存",
        items: [
          { label: "建議使用頻率", value: "每日" },
          { label: "保存方式", value: "陰涼乾燥處，避免日照" },
        ],
      },
    ],
    images: [
      { src: "/images/products/placeholder-1.jpg", alt: "主圖" },
      { src: "/images/products/placeholder-2.jpg", alt: "細節" },
    ],
    published: true,
    createdAt: "2026-02-01T00:00:00.000Z",
  },
];
