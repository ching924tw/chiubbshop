import { products } from "./data";
import { Product } from "./types";

export function getAllProducts(): Product[] {
  return products
    .filter((p) => p.published)
    .slice()
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.published);
}
