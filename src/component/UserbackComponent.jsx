'use client';

import { useEffect } from 'react';

export default function UserbackComponent({ apiKey }) {
  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined') return;

    // Create and load Userback script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.userback.io/widget/v1.js';

    script.onload = () => {
      // Initialize Userback once the script has loaded
      if (window.Userback) {
        window.Userback.init(apiKey);
      }
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (window.Userback) {
        window.Userback.destroy();
      }
      document.head.removeChild(script);
    };
  }, [apiKey]);

  return null;
}
