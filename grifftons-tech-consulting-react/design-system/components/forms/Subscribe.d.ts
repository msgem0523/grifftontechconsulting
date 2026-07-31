import * as React from 'react';
/**
 * Newsletter signup block. Holds its own success state.
 * @startingPoint section="Forms" subtitle="Newsletter signup block, light and forest" viewport="700x320"
 */
export interface SubscribeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  blurb?: string;
  cta?: string;
  /** Small print under the form. */
  note?: string;
  tone?: 'sunken' | 'inverse';
  onSubmit?: (email: string) => void;
}
export declare function Subscribe(props: SubscribeProps): JSX.Element;
