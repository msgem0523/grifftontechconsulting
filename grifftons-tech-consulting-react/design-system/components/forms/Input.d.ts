import * as React from 'react';
/** Round 52px field, or a 14px-radius box when `multiline`. Focus draws a saffron ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase micro label above the field. */
  label?: string;
  error?: string;
  hint?: string;
  multiline?: boolean;
  rows?: number;
}
export declare function Input(props: InputProps): JSX.Element;
