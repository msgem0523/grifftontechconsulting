import * as React from 'react';
/** Pull quote in Newsreader italic — the only place italic display type is used. */
export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  attribution?: string;
  role?: string;
  tone?: 'page' | 'inverse';
  children?: React.ReactNode;
}
export declare function Quote(props: QuoteProps): JSX.Element;
