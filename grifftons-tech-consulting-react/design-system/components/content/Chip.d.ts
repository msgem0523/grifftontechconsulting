import * as React from 'react';
export type ChipTone = 'neutral' | 'saffron' | 'forest' | 'sky' | 'berry' | 'moss' | 'coral' | 'inverse';
/** Round label for skills, tags, filters and article categories. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: ChipTone;
  size?: 's' | 'm';
  /** Filled ink — the active state in a filter row. */
  selected?: boolean;
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
