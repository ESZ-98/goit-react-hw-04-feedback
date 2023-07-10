import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [feedbackStats, setFeedbackStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const clickHandlerFeedback = option => {
    setFeedbackStats(previousStats => ({
      ...previousStats,
      [option]: previousStats[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackStats;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedbackStats;
    const totalProperties = good + neutral + bad;
    return totalProperties === 0
      ? 0
      : Math.round((good / totalProperties) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackStats}
          onLeaveFeedback={clickHandlerFeedback}
        />
        <Statistics
          good={feedbackStats.good}
          neutral={feedbackStats.neutral}
          bad={feedbackStats.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
