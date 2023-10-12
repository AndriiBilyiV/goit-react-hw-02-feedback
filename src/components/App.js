import { Component } from "react";
import { FeedbackButtons } from "./FeedbackButtons/FeedbackButtons";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 0
  };
  countTotalFeedback({good, neutral, bad}) {
    return (good+neutral+bad)
  };
  countPositiveFeedbackPercentage({good, neutral, bad}) {
    return Math.round(good/(good+neutral+bad)*100)
  }
  render() {
    return (
      <div>
        <FeedbackButtons />
        <Statistics props={this.state} countTotal={this.countTotalFeedback} goodPercent={this.countPositiveFeedbackPercentage} />
    </div >
      )
  }
}