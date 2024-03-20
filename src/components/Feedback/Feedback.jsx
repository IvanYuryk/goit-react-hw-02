import css from "./Feedback.module.css";

const Feedback = ({ feedbackCounts, positivePercentage }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p className={css.quotient}>
        Positive Feedback Percentage: {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
