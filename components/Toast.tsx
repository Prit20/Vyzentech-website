'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  duration?: number;
}

export function Toast({ message, isVisible, duration = 4000 }: ToastProps) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-fade-in">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="font-medium">{message}</span>
    </div>
  );
}
