import * as React from 'react';
/**
 * Solid-fill button — the only button type in the MIST system (no outline/ghost/text variants).
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  surface?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}
export declare function Button(props: ButtonProps): JSX.Element;
