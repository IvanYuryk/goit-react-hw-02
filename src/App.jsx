// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCounts, setFeedbackCounts] = useState(initialState);

  useEffect(() => {
    const savedCounts = JSON.parse(localStorage.getItem("feedbackCounts"));
    if (savedCounts) {
      setFeedbackCounts(savedCounts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackCounts(initialState);
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positivePercentage = Math.round(
    ((feedbackCounts.good + feedbackCounts.neutral) / totalFeedback) * 100
  );

  return (
    <div className="container">
      <Description />
      <Feedback
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Options
          feedbackCounts={feedbackCounts}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  );
};

export default App;
