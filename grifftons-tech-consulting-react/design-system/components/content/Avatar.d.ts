import * as React from 'react';
/** Round portrait, or the initials set in Newsreader on a bright tint. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  initials?: string;
  size?: number;
  tone?: 'blush' | 'saffron' | 'moss' | 'sky' | 'forest';
}
export declare function Avatar(props: AvatarProps): JSX.Element;
