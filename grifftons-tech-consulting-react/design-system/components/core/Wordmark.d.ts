import * as React from 'react';
/**
 * The identity. There is no symbol — the brand is the name, set in Newsreader Medium.
 * Never letterspace it wide, never set it in Inter, never enclose it in a shape.
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Cap height in px. 28 in a nav, 20 in a footer, 64+ on a cover. */
  size?: number;
  /** `full` "Temecha Griffin" · `first` "Temecha" · `initials` "TG" (avatars, favicons). */
  variant?: 'full' | 'first' | 'initials';
  tone?: 'ink' | 'inverse' | 'forest';
  /** Stack an uppercase role line beneath the name. */
  lockup?: boolean;
  /** Overrides the role line text. */
  role?: string;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
