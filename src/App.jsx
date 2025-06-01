import { useEffect, useState, useMemo } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("feedbacks"));
      if (
        saved &&
        typeof saved === "object" &&
        ["good", "neutral", "bad"].every((key) => key in saved)
      ) {
        return saved;
      }
    } catch { /* empty */ }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = useMemo(() => {
    return feedbacks.good + feedbacks.neutral + feedbacks.bad;
  }, [feedbacks]);

  const positiveFeedback = useMemo(() => {
    return totalFeedback > 0
      ? Math.round((feedbacks.good / totalFeedback) * 100)
      : 0;
  }, [feedbacks, totalFeedback]);

  return (
    <section>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </section>
  );
}

export default App;
