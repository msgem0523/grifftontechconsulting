import * as React from "react";
export interface FooterColumn {
  title: string;
  items: string[];
}
/** Forest-filled, inset, 28px-rounded footer with the name lockup at 40px. */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  note?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
