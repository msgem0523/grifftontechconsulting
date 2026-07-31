import * as React from 'react';
export type TextType = 'display' | 'body' | 'label';
/** Every piece of type. `display` is Newsreader; `body` and `label` are Inter. */
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type?: TextType;
  /** display: XXL→XS · body: XL→XS · label: L, M. */
  sizing?: 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS';
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  weight?: number;
  align?: 'left' | 'center' | 'right';
  /** Newsreader italic — used for asides and pull quotes, never for emphasis in UI. */
  italic?: boolean;
  /** Cap at 66ch for readable prose. */
  measure?: boolean;
  truncate?: number;
  children?: React.ReactNode;
}
export declare function Text(props: TextProps): JSX.Element;
