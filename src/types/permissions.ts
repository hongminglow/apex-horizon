export type PermissionKey =
  | 'view_revenue'
  | 'view_analytics'
  | 'view_rankings'
  | 'view_performance'
  | 'view_countdown'
  | 'view_activity';

export interface Permission {
  key: PermissionKey;
  label: string;
  description: string;
}

export interface PermissionState {
  permissions: Record<PermissionKey, boolean>;
  togglePermission: (key: PermissionKey) => void;
  hasPermission: (key: PermissionKey) => boolean;
  resetPermissions: () => void;
}
