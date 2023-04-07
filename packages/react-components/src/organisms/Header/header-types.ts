export interface CategoryType {
  id: string
  value: string
  label: string
}

export interface HeaderOptions {
  categories: CategoryType[]
  onSearchQuerySubmit?: (value: string, category: string) => void
  onAccountClick?: () => void
  onCartClick?: () => void
  onLogoClick?: () => void
  onLikesClick?: () => void
  fullBorder?: boolean
}
