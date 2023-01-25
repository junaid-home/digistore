export interface TypographyOptions {
  /**
   * text or any html element(s) that will be rendered inside component.
   * @type React.ReactElement
   */
  children?: React.ReactNode;
  /**
   * css class for styling text element.
   * @type "string"
   */
  className?: string;
  /**
   * The typography style.
   * @default "body1"
   */
  variant?: "body1" | "body2" | "body3" | "h1" | "h2" | "h3" | "caption";
  /**
   * The color of text.
   * @default "black"
   */
  color?:
    | "black"
    | "white"
    | "primary"
    | "secondary"
    | "grey"
    | "greyLight"
    | "greyDark";
}
