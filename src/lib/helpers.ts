/** Generate a random number within a range */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
