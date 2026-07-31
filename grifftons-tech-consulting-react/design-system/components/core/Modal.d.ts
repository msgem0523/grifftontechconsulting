import * as React from 'react';
/** Centred sheet on a 60%-black scrim. 28px radius, Newsreader title, fade-up entrance. */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  footer?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
}
export declare function Modal(props: ModalProps): JSX.Element | null;
/** Tinted aside for a note, caveat or highlighted stat inside prose. */
export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'accent' | 'forest' | 'sky' | 'berry' | 'neutral';
  /** Uppercase kicker above the copy. */
  label?: string;
  children?: React.ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;
