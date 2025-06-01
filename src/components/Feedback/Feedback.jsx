const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => (
    <>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback} %</p>
    </>
  );
  
  export default Feedback;