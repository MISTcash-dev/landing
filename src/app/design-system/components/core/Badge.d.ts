import * as React from 'react';
export interface BadgeProps {
  tone?: 'cobalt' | 'misty' | 'baby' | 'ink';
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
