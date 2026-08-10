import type { JSX } from 'react';
export interface ToastProps {
  tone?: 'ink' | 'cobalt';
  message: string;
  onDismiss?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;
