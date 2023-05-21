export interface CategoryType {
  id: string
  name: string
  slug: string
}

export interface HeaderOptions {
  categories: CategoryType[]
  onSearchQuerySubmit?: (value: string, category: string) => void
  onAccountClick?: () => void
  onCartClick?: () => void
  onLogoClick?: () => void
  onLikesClick?: () => void
  fullBorder?: boolean
  likesCount: number
  cartItemsCount: number
  totalPrice: number
  user: any
}
