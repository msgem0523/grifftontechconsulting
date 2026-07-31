import * as React from 'react';
export interface NavItem { id: string; label: string }
/** Sticky top bar: wordmark left, links centre-left, one action right. */
export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  active?: string;
  onNavigate?: (id: string) => void;
  action?: React.ReactNode;
  /** Route id emitted when the wordmark is clicked. Defaults to "home". */
  homeId?: string;
  tone?: 'page' | 'inverse';
}
export declare function Nav(props: NavProps): JSX.Element;
