export interface CardOptions {
  imgSrc: string
  title: string
  price: number
  discountedPrice: number
  ratings: number
  loading?: boolean
  onContentClick?: () => void
}
