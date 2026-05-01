import { clsx, type ClassValue } from 'clsx';

/** Merge class names with conditional support via clsx */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Type-safe localStorage get with JSON parsing */
export function getStorageItem<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
}

/** Type-safe localStorage set with JSON serialization */
export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable — fail silently
  }
}

/** Remove item from localStorage */
export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // Fail silently
  }
}

/** Generate a random number within a range */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Format a number with comma separators */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

/** Format a number as currency */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);
}

/** Format a percentage with sign */
export function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}

/** Generate simulated mock delay */
export function mockDelay(min = 150, max = 500): Promise<void> {
  const ms = randomBetween(min, max);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Generate a simple unique ID */
export function uid(): string {
  return Math.random().toString(36).slice(2, 11);
}
