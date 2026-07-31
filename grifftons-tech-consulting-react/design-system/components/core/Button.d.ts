import * as React from 'react';
export type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost' | 'inverse' | 'link';
/**
 * Fully-round button. Rises 1px on hover — the one lift in the system.
 * @startingPoint section="Core" subtitle="Round buttons in every variant and size" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` forest fill · `accent` saffron fill · `outline` ink hairline · `ghost` bare · `inverse` white on dark · `link` saffron-underlined text. */
  variant?: ButtonVariant;
  /** 58 / 52 / 40px tall. */
  size?: 'l' | 'm' | 's';
  fullWidth?: boolean;
  disabled?: boolean;
  /** Trailing glyph — nudges 3px right on hover. */
  iconRight?: React.ReactNode;
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
