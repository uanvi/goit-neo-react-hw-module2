const Options = ({ totalFeedback, updateFeedback, resetFeedback }) => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
  
  export default Options;