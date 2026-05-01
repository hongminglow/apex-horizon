import { useState, useEffect, useRef } from 'react';
import { COUNTDOWN_TARGET } from '@/constants';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

/** Persistent countdown hook — survives layout switches via ref-based timing */
export function useCountdown(): CountdownValues {
  const targetMs = useRef(new Date(COUNTDOWN_TARGET.targetDate).getTime());

  const calculate = (): CountdownValues => {
    const diff = targetMs.current - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
    };
  };

  const [values, setValues] = useState<CountdownValues>(calculate);

  useEffect(() => {
    const timer = setInterval(() => setValues(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);

  return values;
}
