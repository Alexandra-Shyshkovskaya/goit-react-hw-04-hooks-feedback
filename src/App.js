  
import React, { useState } from "react";
import Container from "./Components/Container";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";
import Notification from "./Components/Notification";
import Statistics from './Components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  const handleClick = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1)
        break;

      case 'bad':
        setBad(state => state + 1)
        break;

      default:
        return;
    }
  }

    return (
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={handleClick}
            />
          </Section>

          <Section title="Statistics">
           
          {countTotalFeedback() !== 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
            :
            <Notification message="No feedback given"></Notification>}
            
          </Section>
        </Container>
      
    );
  }



