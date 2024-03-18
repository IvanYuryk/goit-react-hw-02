import css from "./Options.module.css";

const Options = ({ feedbackCounts, positivePercentage }) => {
  return (
    <div className={css.options}>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p className={css.quotient}>
        Positive Feedback Percentage:{" "}
        {isNaN(positivePercentage) ? 0 : positivePercentage}%
      </p>
    </div>
  );
};

export default Options;
