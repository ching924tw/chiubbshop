import { groq } from "next-sanity";

export const NEW_IN_PRODUCTS_QUERY = groq`
*[_type == "product" && defined(slug.current) && published != false]
| order(_createdAt desc)[0...4]{
  _id,
  title,
  brand,
  price,
  compareAtPrice,
  "slug": slug.current,
  "image": images[0].asset->{
    url,
    metadata { lqip }
  }
}
`;
