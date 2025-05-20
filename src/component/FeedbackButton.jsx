'use client';

import { useCallback } from 'react';
import { Userback } from '@userback/react';

export default function FeedbackButton() {
  const handleClick = useCallback(() => {
    // Show the Userback widget
    Userback.open();
  }, []);

  return (
    <button onClick={handleClick} className="feedback-button">
      Give Feedback
    </button>
  );
}
