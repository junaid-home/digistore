export interface HeaderOptions {
  categories: { value: string; label: string }[];
  onSearchQuerySubmit: (value: string, category: string) => void;
  onAccountClick: () => void;
  onCartClick: () => void;
  fullBorder?: boolean;
}
