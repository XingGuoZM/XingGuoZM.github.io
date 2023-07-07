import { useState, useEffect } from 'react';

const parseMs = (milliseconds) => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

export default function useCountdown(timeRemain, onEnd) {
  const [timeLeft, setTimeLeft] = useState(Number(timeRemain));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(val => {
        const v = val - 1000;
        if (v <= 0) {
          clearInterval(timer);
          onEnd();
          return 0;
        }
        return v
      });
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])

  return parseMs(timeLeft);
}