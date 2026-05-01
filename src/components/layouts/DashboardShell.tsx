import { Sidebar } from '@/components/layouts/Sidebar';
import { AppBar } from '@/components/layouts/AppBar';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

/** Main dashboard shell with sidebar + app bar + content area */
export function DashboardShell({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-base">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppBar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
