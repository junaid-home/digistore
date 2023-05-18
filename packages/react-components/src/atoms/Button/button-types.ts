export interface ButtonOptions {
  /**
   * text or any html element(s) that will be rendered inside button.
   * @type React.ReactElement
   */
  children?: React.ReactNode
  /**
   * css classes
   */
  className?: string
  /**
   * if true,the button will show a spinner
   */
  isLoading?: boolean
  /**
   * If `true`, the button will be styled in its active state.
   */
  isActive?: boolean
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean
  /**
   * the label to show in the button when `isLoading` is true
   * if no label is passed, it only shows the spinner
   */
  loadingText?: string
  /**
   * position of spinner when `isLoading` is true
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end'
  /**
   * space between `spinner` and `loadingText`
   * @default "8px"
   */
  spinnerSpacing?: string
  /**
   * The html button type to use.
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * if true,the button will show a spinner
   * @default "primary"
   */
  color?: 'primary' | 'secondary'
  /**
   * fill all the available with of the parent element
   * @default false
   */
  fullWidth?: boolean
  /**
   * function that would run when button is clicked
   */
  onClick?: () => void
}
