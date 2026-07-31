import * as React from 'react';
/** The generic surface. 28px radius, soft shadow, 32px padding. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'raised' | 'sunken' | 'outline' | 'inverse' | 'accent';
  /** Adds the hover lift and pointer cursor. */
  interactive?: boolean;
  pad?: number;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
