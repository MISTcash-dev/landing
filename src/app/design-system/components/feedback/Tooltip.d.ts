import * as React from 'react';
export interface TooltipProps {
  label: string;
  children?: React.ReactNode;
  position?: 'top' | 'bottom';
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
