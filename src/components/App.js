import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback({ good, neutral, bad }) {
    return (good+neutral+bad)
  };
  countPositiveFeedbackPercentage({good, neutral, bad}) {
    return Math.round(good/(good+neutral+bad)*100)
  }
  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option] : prevState[option] + 1
    }))
  }

  render() {
    const total = this.countTotalFeedback(this.state)
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state)
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>
        </Section>
        
    </div >
      )
  }
}