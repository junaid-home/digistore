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

export interface OrderItemType {
  quantity: number;
  size: string;
  color: string;
  product: ProductType;
}

export interface OrderType {
  status: string;
  id: string;
  date: string;
  total: number;
  items: OrderItemType[];
}
