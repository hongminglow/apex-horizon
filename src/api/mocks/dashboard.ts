import type { RevenueData, UserAnalyticsData, RankingEntry, PerformanceMetric, ActivityItem } from '@/types';
import { uid, randomBetween } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════
   Mock Data Generators
   Realistic fake data for all dashboard sections
   ═══════════════════════════════════════════════════════════ */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const NAMES = [
  'Sophia Chen', 'Marcus Johnson', 'Aisha Patel', 'Liam O\'Brien',
  'Yuki Tanaka', 'Elena Rodriguez', 'Noah Williams', 'Priya Sharma',
  'Oliver Kim', 'Fatima Al-Rashid', 'Ethan Wright', 'Isabella Costa',
];

const ACTIONS_MAP: Record<string, { action: string; targets: string[] }> = {
  create: { action: 'create', targets: ['Project Alpha', 'Sprint 12', 'API v3 endpoint', 'User segment'] },
  update: { action: 'update', targets: ['Dashboard config', 'Permission policy', 'SSL certificate', 'Billing plan'] },
  delete: { action: 'delete', targets: ['Stale cache', 'Old backup', 'Test environment', 'Expired tokens'] },
  login: { action: 'login', targets: ['Admin portal', 'Analytics hub', 'Dev console', 'Support dashboard'] },
  deploy: { action: 'deploy', targets: ['Frontend v2.4.1', 'Backend hotfix', 'ML Pipeline', 'CDN config'] },
};

const REGIONS = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa'];
const DEVICES = ['Desktop', 'Mobile', 'Tablet'];

export function generateRevenueData(): RevenueData {
  const values = MONTHS.map(() => randomBetween(42000, 128000));
  return {
    labels: MONTHS,
    values,
    totalRevenue: values.reduce((a, b) => a + b, 0),
    growth: +(Math.random() * 20 - 5).toFixed(1),
    avgOrder: randomBetween(85, 320),
    transactions: randomBetween(12000, 48000),
  };
}

export function generateUserAnalytics(): UserAnalyticsData {
  const totalUsers = randomBetween(145000, 280000);
  return {
    totalUsers,
    activeUsers: Math.floor(totalUsers * (0.55 + Math.random() * 0.2)),
    newSignups: randomBetween(2400, 8600),
    churnRate: +(Math.random() * 4 + 1).toFixed(1),
    regions: REGIONS.map((name) => ({
      name,
      users: randomBetween(8000, 65000),
      growth: +(Math.random() * 30 - 5).toFixed(1),
    })),
    deviceBreakdown: [
      { device: DEVICES[0], percentage: randomBetween(55, 70) },
      { device: DEVICES[1], percentage: randomBetween(20, 35) },
      { device: DEVICES[2], percentage: randomBetween(5, 15) },
    ],
  };
}

export function generateRankings(): RankingEntry[] {
  const shuffled = [...NAMES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 8).map((name, i) => {
    const change = randomBetween(-3, 3);
    return {
      id: uid(),
      rank: i + 1,
      name,
      score: randomBetween(8200, 14800),
      change,
      avatar: name.split(' ').map((n) => n[0]).join(''),
      trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable',
    };
  });
}

export function generatePerformanceMetrics(): PerformanceMetric[] {
  const cpu = randomBetween(15, 85);
  const memory = randomBetween(40, 88);
  const responseTime = randomBetween(45, 320);
  const uptime = +(99 + Math.random() * 0.99).toFixed(2);
  const errorRate = +(Math.random() * 2.5).toFixed(2);
  const throughput = randomBetween(1200, 4800);

  const getStatus = (val: number, warn: number, crit: number): 'healthy' | 'warning' | 'critical' =>
    val >= crit ? 'critical' : val >= warn ? 'warning' : 'healthy';

  return [
    { id: uid(), label: 'CPU Usage', value: cpu, unit: '%', change: +(Math.random() * 10 - 5).toFixed(1), status: getStatus(cpu, 70, 90), icon: 'cpu' },
    { id: uid(), label: 'Memory', value: memory, unit: '%', change: +(Math.random() * 8 - 3).toFixed(1), status: getStatus(memory, 75, 90), icon: 'memory-stick' },
    { id: uid(), label: 'Response Time', value: responseTime, unit: 'ms', change: +(Math.random() * 30 - 15).toFixed(0), status: getStatus(responseTime, 200, 500), icon: 'timer' },
    { id: uid(), label: 'Uptime', value: uptime, unit: '%', change: 0, status: uptime >= 99.9 ? 'healthy' : 'warning', icon: 'shield-check' },
    { id: uid(), label: 'Error Rate', value: errorRate, unit: '%', change: +(Math.random() * 1 - 0.5).toFixed(2), status: getStatus(errorRate, 1, 2), icon: 'alert-triangle' },
    { id: uid(), label: 'Throughput', value: throughput, unit: 'req/s', change: +(Math.random() * 200 - 100).toFixed(0), status: throughput >= 2000 ? 'healthy' : 'warning', icon: 'activity' },
  ];
}

export function generateActivityFeed(): ActivityItem[] {
  const types = Object.keys(ACTIONS_MAP) as Array<keyof typeof ACTIONS_MAP>;
  return Array.from({ length: 10 }, (_, i) => {
    const type = types[randomBetween(0, types.length - 1)] as ActivityItem['type'];
    const config = ACTIONS_MAP[type];
    return {
      id: uid(),
      user: NAMES[randomBetween(0, NAMES.length - 1)],
      action: config.action,
      target: config.targets[randomBetween(0, config.targets.length - 1)],
      timestamp: new Date(Date.now() - i * randomBetween(60000, 900000)).toISOString(),
      type,
    };
  });
}
