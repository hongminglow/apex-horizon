import type { LayoutConfig } from '@/types';

export const LAYOUTS: LayoutConfig[] = [
  { id: 'grid', label: 'Grid', icon: 'grid', columns: 3 },
  { id: 'compact', label: 'Compact', icon: 'layout-grid', columns: 2 },
  { id: 'wide', label: 'Wide', icon: 'layout-list', columns: 1 },
];
