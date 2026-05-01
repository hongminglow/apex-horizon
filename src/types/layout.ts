export type LayoutVariant = 'grid' | 'compact' | 'wide';

export interface LayoutConfig {
  id: LayoutVariant;
  label: string;
  icon: string;
  columns: number;
}

export interface LayoutState {
  variant: LayoutVariant;
  sidebarCollapsed: boolean;
  setVariant: (variant: LayoutVariant) => void;
  toggleSidebar: () => void;
}
