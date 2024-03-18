import css from "./Feedback.module.css";

const Feedback = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.feedback}>
      <button
        className={css.feedbackGood}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.feedbackNeutral}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.feedbackBad} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Feedback;
