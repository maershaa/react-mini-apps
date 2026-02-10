import { countTotalFeedback } from '@/utils/helpers';

export function countPositiveFeedbackPercentage(good, neutral, bad) {
  const totalFeedback = countTotalFeedback(good, neutral, bad);
  if (totalFeedback === 0) return 0;

  const positiveFeedback = (good / totalFeedback) * 100;
  return Math.round(positiveFeedback);
}
