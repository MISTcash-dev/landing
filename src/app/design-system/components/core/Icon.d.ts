import type { JSX } from 'react';
/**
 * Icon glyph — minimal stroke set (check, x, chevronDown, chevronRight, info, alert).
 * Intentional addition: MIST has no icon system of its own; this is a small Lucide-style
 * stroke set substituted to match the brand's sharp, geometric line quality.
 */
export interface IconProps {
  name?: 'check' | 'x' | 'chevronDown' | 'chevronRight' | 'info' | 'alert';
  size?: number;
  color?: string;
  strokeWidth?: number;
}
export declare function Icon(props: IconProps): JSX.Element;
