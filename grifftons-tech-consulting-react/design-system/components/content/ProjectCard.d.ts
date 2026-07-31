import * as React from 'react';
/**
 * A piece of work. Media block, client kicker, display title that highlights
 * saffron on hover, summary and tags.
 * @startingPoint section="Content" subtitle="Portfolio project cards, two sizes" viewport="700x420"
 */
export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  image?: string;
  /** Tint shown behind or instead of the image. */
  imageTone?: 'sky' | 'berry' | 'moss' | 'coral' | 'saffron' | 'forest';
  title?: string;
  /** Uppercase kicker above the title. */
  client?: string;
  summary?: string;
  tags?: string[];
  year?: string;
  /** `l` is the lead project (16:10, 36px title); `m` is the grid unit (4:3, 28px). */
  size?: 'm' | 'l';
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
