import * as React from 'react';
/**
 * Every band on every page. Coloured tones are inset and 28px-rounded so the pearl
 * page shows as a margin around them; `page` runs edge to edge.
 * @startingPoint section="Layout" subtitle="Page section bands in all four tones" viewport="1280x520"
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'page' | 'raised' | 'sunken' | 'inverse' | 'accent';
  /** Inner max-width: 680 / 1080 / 1360 / none. */
  width?: 'prose' | 'content' | 'wide' | 'full';
  /** Vertical padding: 0 / 56 / 96 / 160px. */
  pad?: 'none' | 'tight' | 'default' | 'large';
  children?: React.ReactNode;
}
export declare function Section(props: SectionProps): JSX.Element;
/** Kicker + display heading + intro, with an optional right-aligned action. */
export interface SectionHeadProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  title?: string;
  intro?: string;
  action?: React.ReactNode;
}
export declare function SectionHead(props: SectionHeadProps): JSX.Element;
