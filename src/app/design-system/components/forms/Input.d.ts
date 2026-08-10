import * as React from 'react';
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helpText?: string;
  type?: string;
  disabled?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
