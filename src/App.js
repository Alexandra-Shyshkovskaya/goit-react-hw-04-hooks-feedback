import React, { Component } from "react";
import Container from "./Components/Container/Container";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Components/Statistics";

const Section = ({ title, children }) => (
  <section>
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

const Notification = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    return (
      <div>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={this.handleClick}
            />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() !== 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="No feedback given"></Notification>
            )}
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
