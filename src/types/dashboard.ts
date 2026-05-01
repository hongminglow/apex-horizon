export interface RevenueData {
  labels: string[];
  values: number[];
  totalRevenue: number;
  growth: number;
  avgOrder: number;
  transactions: number;
}

export interface UserAnalyticsData {
  totalUsers: number;
  activeUsers: number;
  newSignups: number;
  churnRate: number;
  regions: Array<{ name: string; users: number; growth: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number }>;
}

export interface RankingEntry {
  id: string;
  rank: number;
  name: string;
  score: number;
  change: number;
  avatar: string;
  trend: 'up' | 'down' | 'stable';
}

export interface PerformanceMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  change: number;
  status: 'healthy' | 'warning' | 'critical';
  icon: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  type: 'create' | 'update' | 'delete' | 'login' | 'deploy';
}

export interface CountdownTarget {
  label: string;
  targetDate: string;
  description: string;
}
