import React, { Component } from 'react';
import { Notification } from './Notification/Notification';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return good ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, bad, neutral } = this.state;

    return(
      <div>
      <Section title='Please leave feedback'><Feedback options={options}  handleLeaveFeedback={this.handleLeaveFeedback} /></Section>
      
      <Section title='Statistics'>{
        this.countTotalFeedback() ? (
          <Statistics good={good} bad={bad} neutral={neutral} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
        ) : ( <Notification message="There is no feedback" /> )
      }</Section>
      </div>
    )
  }
}