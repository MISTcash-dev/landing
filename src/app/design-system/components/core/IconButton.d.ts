import * as React from 'react';
export interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
