import * as React from 'react';
/** Big Newsreader number over a small Inter caption. Used in threes. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  label?: string;
  tone?: 'ink' | 'accent' | 'forest' | 'inverse';
  align?: 'left' | 'center';
}
export declare function Stat(props: StatProps): JSX.Element;
