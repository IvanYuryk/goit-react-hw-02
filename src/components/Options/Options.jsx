import css from "./Options.module.css";

const Options = ({ updateOptions, totalOptions, resetOptions }) => {
  return (
    <div className={css.options}>
      <button className={css.optionsGood} onClick={() => updateOptions("good")}>
        Good
      </button>
      <button
        className={css.optionsNeutral}
        onClick={() => updateOptions("neutral")}
      >
        Neutral
      </button>
      <button className={css.optionsBad} onClick={() => updateOptions("bad")}>
        Bad
      </button>
      {totalOptions > 0 && (
        <button className={css.resetButton} onClick={resetOptions}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
