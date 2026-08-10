import type { JSX } from 'react';
export interface TabItem { id: string; label: string; }
export interface TabsProps {
  tabs?: TabItem[];
  activeId?: string;
  onChange?: (id: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
