export interface ProductType {
  id: string;
  slug: string;
  title: string;
  summary: string;
  imgSrc: string;
  discountedPrice: number;
  price: number;
  ratings: number;
}

export interface CategoryType {
  id: string;
  value: string;
  label: string;
}

export interface LinkType {
  id: string;
  pathname: string;
  href: string;
}

export interface HighLightType {
  id: string;
  title: string;
  desc: string;
  imgSrc: string;
}
