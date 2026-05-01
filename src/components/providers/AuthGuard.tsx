import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

/** Route guard that redirects unauthenticated users to login */
export function AuthGuard({ children }: Props) {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
