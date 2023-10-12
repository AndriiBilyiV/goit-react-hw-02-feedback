import { Component } from "react";
import { FeedbackButtons } from "./FeedbackButtons/FeedbackButtons";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 6,
    neutral: 0,
    bad: 0
  };
  countTotalFeedback() {
    return (this.state.good*2)
  }
  render() {
    return (
      <div>
        <FeedbackButtons />
        <Statistics props={this.state} total={this.countTotalFeedback} />
    </div >
      )
  }
}