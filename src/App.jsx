import { useState, useEffect } from "react";
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

  const updateOptions = (feedbackType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const resetOptions = () => {
    setFeedbackCounts(initialState);
  };

  const totalOptions =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  const positivePercentage =
    Math.round(
      ((feedbackCounts.good + feedbackCounts.neutral) / totalOptions) * 100
    ) || 0;

  return (
    <div className="container">
      <Description />
      <Options
        updateOptions={updateOptions}
        totalOptions={totalOptions}
        resetOptions={resetOptions}
      />
      {totalOptions > 0 ? (
        <Feedback
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
