export interface SearchBarOptions {
  categories: {id: string; name: string; slug: string}[]
  onSearchQuerySubmit?: (value: string, category: string) => void
}
