export type Money = {
  currency: "TWD";
  amount: number;
};

export type Category = {
  slug: string; // "intimate-care"
  name: string; // "私密清潔"
};

/** 規格：支援「群組」＋「子項」 */
export type SpecItem = {
  label: string;               // 例：容量、產地、成分、使用方式...
  value?: string;              // 例：250ml、France...
  notes?: string;              // 例：補充說明（可選）
  children?: SpecItem[];        // ✅ 子項（你要的子分類往下填）
};

export type SpecGroup = {
  title: string;               // 例：基本資訊、成分與特性、使用方式...
  items: SpecItem[];
};

export type Product = {
  id: string;
  slug: string;

  name: string;                // 商品名稱（必填）
  brand: string;               // ✅ 品牌（必填）
  texture: string;             // ✅ 質地（必填）：凝露/乳液/油/錠...

  expiry: string;              // ✅ 保存期限（必填）：建議 "YYYY-MM" 或 "YYYY-MM-DD"
  description: string;         // ✅ 商品描述（你後續自由填，支援換行）

  specs?: SpecGroup[];         // ✅ 規格（可選，但建議至少一組）
  sku?: string;                // ✅ 商品貨號（可選：你自由決定是否填）

  category?: Category;         // 可選（你若已用 Navbar 類別，可加）
  price?: Money;               // 可選（你若現在先不做購物車，可先不放）
  inStock?: boolean;           // 可選

  images: { src: string; alt?: string }[];

  published: boolean;
  createdAt: string;           // ISO
  updatedAt?: string;          // ISO
};
